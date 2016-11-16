import { combineReducers } from 'redux';

// Create separate file(s) for reducers, import here and combine.

const rootReducer = combineReducers(
  { emptyReducer: (state = {}) => state },
);

export default rootReducer;
