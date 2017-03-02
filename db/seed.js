const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  {title: 'Happiness', category: 'mental', price: 100, description: 'This jar of Happiness is guaranteed to make you the happiest person alive for 24 hours', inventory: 10},
  {title: 'Elation', category: 'mental', price: 100, description: 'This jar of Elation is guaranteed to make provide you the mix of both worlds: happiness AND excitement, for 24 hours', inventory: 10},
  {title: 'Relaxation', category: 'physical', price: 100, description: 'This jar of Relaxation is guaranteed to make give you the most satisfyingly restful experience for 24 hours', inventory: 10},
  {title: 'I am Queen Bey', category: 'thoughts', price: 500, description: 'Have a party in a few hours? Do you feel super glum? This jar of Queen Bey is bound to give you the thoughts of the Queen, herself', inventory: 10},
  {title: 'Christmas Morning', category: 'themes', price: 1000, description: 'This jar of Christmas Morning with have you laughing and HOHOHO-ing all the way to the North Pole - great for individuals who are less than festive and have children', inventory: 5}
], product => db.model('products').create(product))


const seedReviews = () => db.Promise.map([
  {title: 'Happiness is wonderful!', rating: 5, description: 'This was the best purchase of MY LIFE!', product_id: 1},
  {title: 'It was good!', rating: 4, description: 'This was a handy purchase for my down times!', product_id: 1}
], review => db.model('reviews').create(review))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .then(()=>{
    return db.model('orders').create({
      status: "inCart"
    })
  }).then((createdOrder) => createdOrder.setCustomer(1))
  .catch(error => console.error(error))
  .finally(() => db.close())
