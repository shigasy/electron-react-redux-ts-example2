import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './components/FoundationStyles';
import TaskList from './components/TaskList';
// import UserForm from './components/UserForm';
import Store from './Store';

ReactDOM.render(
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TaskList />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
