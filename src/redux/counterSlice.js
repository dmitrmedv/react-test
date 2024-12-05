import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './operations';

export const initialState = {
  counter: 0,
  step: 1,
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += state.step;
    },
    decrement: (state, action) => {
      state.counter -= state.step;
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
    reset: (state, action) => {
      return initialState;
    },
  },
});

export const counterReducer = slice.reducer;
export const { increment, decrement, changeStep, reset } = slice.actions;
