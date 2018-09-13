import React from 'react';
import SearchBar from './SearchBar'
import { mount, shallow } from 'enzyme';
import CityOption from '../CityOption/CityOption'
import { data } from '../fakeapi';

describe('SearchBar', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<SearchBar cleanLocation={() => {}} trie={{hi: "I'm a tree"}} magnifierClass={'mag-class'}/>)
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

  it('should have props', () => {
    expect(wrapper.props().children[2].props.children.props.className).toEqual('mag-class')
  });
})
