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

  it('should render content to the dom', () => {

    wrapper.setState({location: 'Denver, CO'});

    expect(wrapper.state().location.toEqual('Denver, CO')
  })

  it('should render content to the dom', () => {

    //this means we should find one 'input' in the wrapper/component rendering
    expect(wrapper.find('input').length).toBe(1);
  })

  t('should have multiple state properties', () => {

    wrapper.setState({location: 'Denver, CO'});
    wrapper.setState({location: 'Buffalo, NY'});

    expect(wrapper.
  })
})
