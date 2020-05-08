import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import UserForm from './components/UserForm';
import Store from './Store';

ReactDOM.render(
  <Provider store={Store}>{/* <UserForm /> */}</Provider>,
  document.getElementById('root')
);
