import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementProgress, decrementProgress } from '../../actions/progress';
import HomePage from './HomePage';

export function HomePageContainer(props) {
  return (
    <HomePage {...props} />
  );
}

// export function HomePageContainer({ decrementProgressAction, incrementProgressAction }) {
//   return (
//     <HomePage
//       incrementProgress={incrementProgressAction}
//       decrementProgress={decrementProgressAction}
//     />
//   );
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementProgress,
    decrementProgress,
  }, dispatch);
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     incrementProgressAction: incrementProgress,
//     decrementProgressAction: decrementProgress,
//   }, dispatch);
// }

// null is needed for mapStateToProps which isn't used the following code
export default connect(null, mapDispatchToProps)(HomePageContainer);
