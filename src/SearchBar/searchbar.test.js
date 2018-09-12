import React from 'react';
import SearchBar from './SearchBar'
import { mount, shallow } from 'enzyme';
import CityOption from '../CityOption/CityOption'

// import App from '/App.js';


describe('SearchBar', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<SearchBar cleanLocation={() => {}} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('datalist').length).toBe(1);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('img').length).toBe(1);
  });

  it('should update state', () => {
    wrapper.setState({ location: 'Denver, CO' });

    expect(wrapper.state().location).toEqual('Denver, CO');
  });

  it('should have multiple state properties', () => {
    wrapper.setState({ location: 'Chica' });
    wrapper.setState({ cityArray: ['Chicago, IL']})

    expect(wrapper.state().location).toEqual('Chica');
    expect(wrapper.state().cityArray).toEqual(['Chicago, IL']);
  });

  // it('should have props', () => {
  //   // wrapper = shallow(<SearchBar includedProp='Trie' />)
  //   console.log(wrapper.props().cleanLocation)
  //   expect(wrapper.props().cleanLocation).toEqual(() => {})
  // })
})
