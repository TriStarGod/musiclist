import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import { mapDispatchToProps } from '../../actions/progress';
import Sidebar from '../shared/Sidebar';

function HomePage({ decrementProgress, incrementProgress }) {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-8">
        <Button onClick={incrementProgress}>Increment</Button> &nbsp;
        <Button onClick={decrementProgress}>Decrement</Button>
      </div>
      <Sidebar />
    </div>
  );
}

// null is needed for mapStateToProps which isn't used the following code
export default connect(null, mapDispatchToProps)(HomePage);
