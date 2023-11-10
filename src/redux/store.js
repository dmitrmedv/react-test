import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducer';
const { configureStore } = require('@reduxjs/toolkit');

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(rootReducer);
// export const store = configureStore({ reducer: persistedReducer });
// export const persistor = persistStore(store);

export const store = configureStore({ reducer: rootReducer });
