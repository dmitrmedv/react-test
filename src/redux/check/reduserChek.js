import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './initialState';

// export const reduserChek = (state = initialState, { type }) => {
//   if (type === 'toggleCheck') {
//     return { ...state, check: !state.check };
//   }
//   return state;
// };

export const reduserChek = createReducer(initialState, {
  toggleCheck: (state, { type }) => {
    if (type === 'toggleCheck') {
      return { ...state, check: !state.check };
    }
    return state;
  },
});
