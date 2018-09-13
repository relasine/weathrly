import React from 'react';
import { mount, shallow } from 'enzyme';
import { data } from '../fakeapi'
import Welcome from './Welcome'

describe('Welcome', ()=>{


  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Welcome />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

it('should update state', () => {
    wrapper.setState({ location: 'Denver, CO' });

    expect(wrapper.state().location).toEqual('Denver, CO');
  });



});