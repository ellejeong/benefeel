import react, { Component } from 'react';

export default class singleProduct extends Component {


  render() {
    if (!this.state) { return null }

    const {joke, answered} = this.state
    return (
      <div onClick={answered ? this.nextJoke : this.answer}>
        <h1>{joke.q}</h1>
        {answered && <h2>{joke.a}</h2>}
        <cite>~xoxo, bones</cite>
      </div>
    )
  }
}
