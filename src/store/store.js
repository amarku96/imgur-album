import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { imagesApi } from './apiSlice/apiSlice';

export  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(imagesApi.middleware),
  });
  
  setupListeners(store.dispatch);
  
 