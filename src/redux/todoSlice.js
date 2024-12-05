import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, removeTodo, toggleComplete } from './operations';

const initialState = {
  todos: [],
  filterQuery: '',
  filterComplite: 'all',
  error: '',
  isLoading: false,
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    changeFilterQuery: (state, action) => {
      state.filterQuery = action.payload;
    },
    changeCompleteFilter: (state, action) => {
      state.filterComplite = action.payload;
    },
    // toggleComplete: (state, action) => {
    //   const todo = state.todos.find(item => item.id === action.payload);
    //   if (todo) {
    //     todo.complete = !todo.complete;
    //   }
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, actions) => {
        state.todos = actions.payload;
        state.isLoading = false;
      })
      .addCase(removeTodo.fulfilled, (state, actions) => {
        state.todos = state.todos.filter(
          item => item.id !== actions.payload.id
        );
      })
      .addCase(addTodo.fulfilled, (state, actions) => {
        state.todos.push(actions.payload);
      })
      .addCase(toggleComplete.fulfilled, (state, actions) => {
        const element = state.todos.find(
          item => item.id === actions.payload.id
        );
        if (element) {
          element.complete = actions.payload.complete;
        }
      });
  },
});

export const selectorTodos = state => state.todos.todos;
export const selectorFilterQuery = state => state.todos.filterQuery;
export const selectorFilterComplite = state => state.todos.filterComplite;

export const TodoReducer = slice.reducer;
export const { changeFilterQuery, changeCompleteFilter } = slice.actions;
