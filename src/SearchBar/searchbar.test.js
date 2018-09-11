import React from 'react';
import SearchBar from './SearchBar'
import { mount, shallow } from 'enzyme';
// import App from '/App.js';


describe('SearchBar', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<SearchBar />)
  });

  it.only('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render an h1, controls, and trivialist component', () => {

  })
})
