import React from 'react';
// export default function testComponent(props) {
// props destructured to { headline, count, showCount }
export default function testComponent({ headline, count, showCount }) {
  return (
    <div>
      <h1>{headline}</h1>
      {showCount ? <p>{count}</p> : null}
    </div>
  );
}
