import React from 'react';
import Daily from './Daily'
import { mount, shallow } from 'enzyme';

// import App from '/App.js';


describe('Daily', ()=>{

  let wrapper;

  beforeEach(()=>{
    let props = {
      data: 'date',
      date: 'weekday',
      weekday: ''
    }
    wrapper = shallow(<Daily {...props} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper.find('h3').length).toBe(2);
    expect(wrapper.find('section').length).toBe(1);

  });

  // it('should have props', () => {
  //   // wrapper = shallow(<SearchBar includedProp='Trie' />)
  //   console.log(wrapper.props().cleanLocation)
  //   expect(wrapper.props().cleanLocation).toEqual(() => {})
  // })
})
