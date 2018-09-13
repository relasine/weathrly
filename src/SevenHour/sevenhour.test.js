import React from 'react';
import { mount, shallow } from 'enzyme';
import { data } from '../fakeapi'
import SevenHour from './SevenHour'

describe('SevenHour', ()=>{


  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<SevenHour data={data.hourly_forecast}/>)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });



});