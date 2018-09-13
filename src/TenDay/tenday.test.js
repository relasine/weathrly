import React from 'react';
import TenDay from './TenDay'
import { mount, shallow } from 'enzyme';
import data from '../fakeapi'

// import App from '/App.js';


describe('TenDay', ()=>{

  let wrapper;
  let props;

  beforeEach(()=>{
    props = {
      toggleState: true,
      data: []
    }

    wrapper = shallow(<TenDay {...props} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper.find('article').length).toBe(1);
  });

  it('should render an empty div if toggleState is false', () => {
    props = {
      toggleState: false
    }

    wrapper = shallow(<TenDay {...props} />)

    expect(wrapper.find('article').length).toBe(0);
  })

})
