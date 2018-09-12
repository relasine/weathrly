import React from 'react';
import Current from './Current'
import { mount, shallow } from 'enzyme';

describe('Current', ()=>{

  let wrapper;

  // beforeEach(()=>{
  //   wrapper = shallow(<Current data='display_location.full' />)
  // });

  it('should exist', () => {
    // expect(wrapper).toBeDefined();
  });

  // it('should render content to the DOM', () => {
  //   expect(wrapper.find('div').length).toBe(1);
  //   expect(wrapper.find('section').length).toBe(1);
  //   expect(wrapper.find('aside').length).toBe(1);
  //   expect(wrapper.find('article').length).toBe(1);
  //   expect(wrapper.find('h1').length).toBe(1);
  //   expect(wrapper.find('h2').length).toBe(3);
  // });

  // it('should have props', () => {
  //   expect(wrapper.props().data).toEqual('display_location')
  // })
})
