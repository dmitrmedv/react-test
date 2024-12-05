import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchTodos = createAsyncThunk(
  `todos/fetchAll`,
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/todos`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  `todos/AddTodo`,
  async (todo, thunkAPI) => {
    try {
      const response = await axios.post(`/todos`, todo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeTodo = createAsyncThunk(
  `todos/removeTodo`,
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/todos/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleComplete = createAsyncThunk(
  `todos/toggleComplete`,
  async (body, thunkAPI) => {
    try {
      const response = await axios.patch(`/todos/${body.id}`, {
        complete: !body.complete,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
