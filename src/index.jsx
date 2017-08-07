import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
// CSS from a module
import 'bootstrap/dist/css/bootstrap.css';
// CSS from a local file
import './css/musiclist.scss';
// Default export from a local file
import Store from './store';
// import TestComponent from './testcomponent';
import Base from './components/Base';

// render(
//   <TestComponent/>,
//   document.querySelector('#app'),
// );
const renderApp = (Component) => {
  render(
    <AppContainer>
      <Provider store={Store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.querySelector('#app'),
  );
};
// run first time app runs
// renderApp(TestComponent);
renderApp(Base);

// called when a change happens
if (module && module.hot) {
  // module.hot.accept('./testcomponent', () => {
  //   renderApp(TestComponent);
  // });
  module.hot.accept('./components/Base', () => {
    renderApp(Base);
  });
}
