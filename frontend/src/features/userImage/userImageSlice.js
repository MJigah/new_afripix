import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userImageService from "./userImageService";

// const newImage = JSON.parse(localStorage.getItem('userImage'))

const initialState = {
    userImages: null,
    isUserImageLoading: false,
    isUserImageError: false,
    isUserImageSuccess: false,
    userImageMessage: ''   
}


export const getUserImages = createAsyncThunk(
    "userImage/getUserImages", async(id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await userImageService.getUserImages(id, token)
        } catch (error) {
            const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
        }
    }
) 

export const userImageSlice = createSlice({
    name: "userImage",
    initialState,
    reducers: {
        reset: (state) => {
            state.isUserImageLoading = false
            state.isUserImageError = false
            state.isUserImageSuccess = false
            state.userImageMessage = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUserImages.pending, (state) => {
            state.isUserImageLoading = true
        })
        .addCase(getUserImages.fulfilled, (state, action) => {
            state.isUserImageLoading = false
            state.isUserImageSuccess = true
            state.userImages = action.payload
        })
        .addCase(getUserImages.rejected, (state, action) => {
            state.isUserImageLoading = false
            state.isUserImageError = true
            state.userImageMessage = action.payload
            state.userImages = []
        })
    }
    
})

export const { reset } = userImageSlice.actions
export default userImageSlice.reducer