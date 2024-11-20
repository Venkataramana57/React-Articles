import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
import articleReducer from './slices/articleSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  articles: articleReducer,
});

// Configuration for redux-persist
const persistConfig = {
  key: 'root', // The key for the root state in localStorage
  storage, // Use localStorage as the default storage mechanism
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

// Create the persistor for redux-persist
export const persistor = persistStore(store);
export default store;
