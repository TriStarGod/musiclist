// combineReducers combines all the reducers into one reducer
// createStore turns the single reducer into a store
import { combineReducers, createStore } from 'redux';
// get progress reducer
import ProgressReducer from '../reducers/progress';
// combine the reducers into one reducer
const combinedReducers = combineReducers({
  progress: ProgressReducer,
});
// transform reducer into store
const Store = createStore(combinedReducers);

export default Store;
