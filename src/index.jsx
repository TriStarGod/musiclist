// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
// import TestComponent from './testcomponent';
import Base from './components/Base';

// render(
//   <TestComponent/>,
//   document.querySelector('#app'),
// );
const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component headline="Test Headline" count={12345} showCount />
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
