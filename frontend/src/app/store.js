import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import imageReducer from '../features/image/imageSlice';
import userImageReducer from '../features/userImage/userImageSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    images: imageReducer,
    userImages: userImageReducer,
  },
});
