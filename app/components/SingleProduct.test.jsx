import React from 'react';
import chai, {expect} from 'chai';
chai.use(require('chai-enzyme')());
import {shallow} from 'enzyme';
import SingleProduct from './SingleProduct';

describe('<SingleProduct />', () => {
  const selectedProduct = {
    title: 'A great product name',
    category: 'mental',
    price: 100,
    description: 'A product description',
    inventory: 20,
  }

  let wrapper
  beforeEach('render the root', () =>
    wrapper= shallow(<SingleProduct selectedProduct={selectedProduct} />)
  )

    it('should have props for selected product, handle submit, and handle input change', function () {
        expect(wrapper.props().selectedProduct).to.be.defined;
        expect(wrapper.props().handleSubmit).to.be.defined;
        expect(wrapper.props().handleInputChange).to.be.defined;
  });

    it('shows the product title', () => {
        expect(wrapper.find('h1')).to.have.length(1)
        expect(wrapper.find('h1').text()).equal(selectedProduct.title)
    })

    it('should have a quantity submit button', function () {
        expect(wrapper.find('button')).to.have.length(1);
    });

    it('should have an quantity select dropdown', function () {
        expect(wrapper.find('select')).to.have.length(1);
    });

    // it('shows reviews relating to the single product');


})
