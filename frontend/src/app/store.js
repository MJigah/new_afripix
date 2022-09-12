import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import imageReducer from '../features/image/imageSlice';
import userImageReducer from '../features/userImage/userImageSlice'
import selectImageReducer from '../features/selectImage/selectImageSlice'
import categoryReducer from '../features/category/categorySlice'
import searchCategReducer from '../features/searchCateg/searchCategSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    images: imageReducer,
    userImages: userImageReducer,
    selectImage: selectImageReducer,
    allCategories: categoryReducer,
    searchedCategory: searchCategReducer,
  },
});
