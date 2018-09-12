import React from 'react';
import CityOption from './CityOption'
import { mount, shallow } from 'enzyme';

// import App from '/App.js';


describe('CityOption', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<CityOption />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper.find('option').length).toBe(1);

  });

  // it('should have props', () => {
  //   // wrapper = shallow(<SearchBar includedProp='Trie' />)
  //   console.log(wrapper.props().cleanLocation)
  //   expect(wrapper.props().cleanLocation).toEqual(() => {})
  // })
})
