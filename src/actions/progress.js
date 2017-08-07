import { bindActionCreators } from 'redux';
// {
//   type: 'A_UNQIUE_NAME_ALWAYS_IN_CAPS_WITH_UNDERSCORES',
//   data: 'some data' // can be string, array, etc
// }

// export const incrementProgress = () => {
//   return {
//     type: 'INCREMENT_PROGRESS',
//   };
// };

// wrap in it in parenthesis ie () or it javascript will think you are opening
// a function and not setting a return value
export const incrementProgress = () => ({ type: 'INCREMENT_PROGRESS' });

// // examples of implicit returns
// const returnTrue = () => true;
// const sayHi = (firstName, lastName) => `Hi, ${firstName} ${lastName}!`;
// // only need to wrap it up in parenthesis if it returns more than one item
// // myArray is only returning length
// const showLength = myArray => myArray.length;

export const decrementProgress = () => ({ type: 'DECREMENT_PROGRESS' });

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    incrementProgress,
    decrementProgress,
  }, dispatch);
}
