import React from 'react';
import { mount, shallow } from 'enzyme';
import { data } from '../fakeapi'
import Toggle from './Toggle'

describe('Toggle', ()=>{

  let wrapper;

  it('should exist', () => {
    wrapper = shallow(<Toggle toggleStateSevenHour={true} toggleStateTenDay={false} />)

    expect(wrapper).toBeDefined();
  });

  it('should render SevenHour but not TenDay by default', () => {
    wrapper = shallow(<Toggle toggleStateSevenHour={true} toggleStateTenDay={false} />)
    expect(wrapper.props().children[1].props.className).toEqual('ten-day-toggle')
    expect(wrapper.props().children[0].props.className).toEqual('seven-hour-toggle-selected')
  })

  it('should render TenDay but not SevenDay when toggled', () => {
    wrapper = shallow(<Toggle toggleStateSevenHour={false} toggleStateTenDay={true} />)
    expect(wrapper.props().children[0].props.className).toEqual('seven-hour-toggle')
    expect(wrapper.props().children[1].props.className).toEqual('ten-day-toggle-selected')
  })

});