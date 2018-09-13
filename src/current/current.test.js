import React from 'react';
import Current from './Current';
import { mount, shallow } from 'enzyme';
import { data } from '../fakeapi';

describe('Current', ()=>{

  let wrapper;

  let props = {
    data: data.current_observation,
    forecastTemp: data.forecast.simpleforecast.forecastday[0]
  }

  beforeEach(()=>{
    wrapper = shallow(<Current data={props.data} forecastTemp={props.forecastTemp}/>)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('aside').length).toBe(1);
    expect(wrapper.find('article').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h2').length).toBe(4);
  });

  it('should have props', () => {
    expect(wrapper.props().children[0].props.children[0]).toEqual('Louisville, KY')
  })



})
