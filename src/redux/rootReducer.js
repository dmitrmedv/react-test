// import { combineReducers } from '@reduxjs/toolkit';
// import { reduserChek } from './check/reduserChek';
import { combineReducers } from '@reduxjs/toolkit';
import { checkSliceReduser } from './check/checkSlice';
import { reduserCounter } from './counter/reduserCounter';

// export const rootReducer = combineReducers({
//   check: checkSliceReduser,
//   count: reduserCounter,
// });

export const rootReducer = {
  check: checkSliceReduser,
  count: reduserCounter,
};
