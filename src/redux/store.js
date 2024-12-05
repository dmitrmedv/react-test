import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { counterReducer } from './counterSlice';
import { TodoReducer } from './todoSlice';

const persistConfigCounter = {
  key: 'counterPersistor',
  version: 1,
  storage,
};

const persistConfigTodos = {
  key: 'todosPersistor',
  version: 1,
  storage,
  blacklist: ['filterQuery'],
};

const persistedReducerCouter = persistReducer(
  persistConfigCounter,
  counterReducer
);
const persistedReducerTodos = persistReducer(persistConfigTodos, TodoReducer);

export const store = configureStore({
  reducer: {
    counter: persistedReducerCouter,
    todos: persistedReducerTodos,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
