import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount, shallow } from 'enzyme';
import { data } from './fakeapi';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('SearchBar', ()=>{

  let wrapper; 

  beforeEach(()=>{
    wrapper = shallow(<App />)
    wrapper.setState({ 
      data: data
    })
  });

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM if it has data', () => {
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('section').length).toBe(2);
  });

  it('should render content to the DOM if it has does not have data', () => {
    wrapper.setState({ data: undefined })
    expect(wrapper.find('section').length).toBe(1);
  });

  it('should update state', () => {
    wrapper.setState({ location: 'Denver, CO' });
    expect(wrapper.state().location).toEqual('Denver, CO');
  });

  it('should have multiple state properties', () => {
    wrapper.setState({ location: 'Chica' });
    wrapper.setState({ cityLocation: ['Chicago, IL']})

    expect(wrapper.state().location).toEqual('Chica');
    expect(wrapper.state().cityLocation).toEqual(['Chicago, IL']);
  });
  

})