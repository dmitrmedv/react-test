import { initialState } from './initialState';

export const reduserCounter = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'increment':
      return { ...state, number: state.number + payload };

    case 'decrement':
      return { ...state, number: state.number - payload };
    default:
      return state;
  }
};
