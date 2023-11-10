import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const checkSlice = createSlice({
  name: 'check',
  initialState,
  reducers: {
    toggleCheck: state => {
      return { ...state, check: !state.check };
    },
  },
});

export const { toggleCheck } = checkSlice.actions;
export const checkSliceReduser = checkSlice.reducer;
