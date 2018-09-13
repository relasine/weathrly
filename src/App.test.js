// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { shallow } from 'enzyme';
// import { data } from './fakeapi';
// import { apikey } from './apikey';


// it('renders without crashing', () => {
//   const div = document.createElement('div');

//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// describe('SearchBar', ()=>{

//   let wrapper; 

//   beforeEach(()=>{
//     wrapper = shallow(<App />);
//     wrapper.setState({ 
//       data: data
//     });
//   });

//   it('should exist', () => {
//     expect(wrapper).toBeDefined();
//   });

//   it('should render content to the DOM if it has data', () => {
//     expect(wrapper.find('div').length).toBe(1);
//     expect(wrapper.find('section').length).toBe(2);
//   });

//   it('should render content to the DOM if it has does not have data', () => {
//     wrapper.setState({ data: undefined });
//     expect(wrapper.find('section').length).toBe(1);
//   });

//   it('should update state', () => {
//     wrapper.setState({ location: 'Denver, CO' });
//     expect(wrapper.state().location).toEqual('Denver, CO');
//   });

//   it('should have multiple state properties', () => {
//     wrapper.setState({ location: 'Chica' });
//     wrapper.setState({ cityLocation: ['Chicago']});

//     expect(wrapper.state().location).toEqual('Chica');
//     expect(wrapper.state().cityLocation).toEqual(['Chicago']);
//   });

//   it('should have a populated pre-trie', () => {
//     expect(wrapper.state().trie.wordCount).toEqual(1000);
//   })

//   it('should be able to put data in local storage via setState', () => {
//     localStorage.clear()
//     wrapper.setState({ cityLocation: 'Chicago'});

//     expect(localStorage).toEqual({"store": {"storedLocation": "{\"city\":\"Chicago\"}"}})
//   })

// });