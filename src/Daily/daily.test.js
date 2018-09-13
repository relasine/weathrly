import React from 'react';
import Daily from './Daily'
import { mount, shallow } from 'enzyme';
import { data } from '../fakeapi';


describe('Daily', ()=>{

  let wrapper;

  let dayData = data.forecast.simpleforecast.forecastday[0];

  beforeEach(()=>{
    let props = {
      data: dayData,
      weekday: dayData.date.weekday,
      icon: dayData.icon,
      highTemp: dayData.high.fahrenheit,
      lowTemp: dayData.low.fahrenheit,
      key: dayData.period

    }
    wrapper = shallow(<Daily data={props.data} weekday={props.weekday} icon={props.icon} highTemp={props.highTemp} lowTemp={props.lowTemp} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper.find('h3').length).toBe(2);
    expect(wrapper.find('section').length).toBe(1);

  });

  it('should have props', () => {
    expect(wrapper.props().children[2].props.children[0]).toEqual('51')


  })
})
