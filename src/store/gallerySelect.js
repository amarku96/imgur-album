import { createSelector } from 'reselect';

// Create a selector function to retrieve the images data
const selectImagesData = (state) => state.imagesApi.data;

// Create a memoized selector using createSelector
export const selectImages = createSelector(
  selectImagesData,
  (data) => data
);
