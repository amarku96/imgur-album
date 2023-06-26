import { combineReducers } from 'redux';
import gallerySliceReducer from './apiSlice/gallerySlice';
import { imagesApi } from './apiSlice/apiSlice';

const rootReducer = combineReducers({
  imagesApi: imagesApi.reducer,
  gallery: gallerySliceReducer,
});

export default rootReducer;