// Container is needed for the Base to allow the Base to connect to its part
// of the Store and for the props to pass down to the Base
import React from 'react';
import { connect } from 'react-redux';
import Base from './Base';
// passes the props from mapStateToProps to the component
function BaseContainer(props) {
  return (
    <Base progress={props.progress} />
  );
}
// maps the state to the props of the component
function mapStateToProps(state) {
  return {
    progress: state.progress,
  };
}
// connect binds the app state to the component's props
// this won't overwrite other props sent from higher level components
// this will also cause the component to re-render on every app state change
export default connect(mapStateToProps)(BaseContainer);
