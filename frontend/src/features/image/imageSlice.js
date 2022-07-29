import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import imageService from "./imageService";

const initialState = {
    images: [],
    isImageLoading: false,
    isImageError: false,
    isImageSuccess: false,
    imageMessage: ''   
}

export const upload = createAsyncThunk(
    "image/upload", async(data, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await imageService.upload(data, token)
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

export const getImages = createAsyncThunk(
    "image/getImages", async(_, thunkAPI) => {
        try {
            return await imageService.getImages()
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

export const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        reset: (state) => {
            state.isImageLoading = false
            state.isImageError = false
            state.isImageSuccess = false
            state.imageMessage = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(upload.pending, (state) => {
            state.isImageLoading = true
        })
        .addCase(upload.fulfilled, (state, action) => {
            state.isImageLoading = false
            state.isImageSuccess = true
            state.images = state.auth.user.images.push(action.payload)
        })
        .addCase(upload.rejected, (state, action) => {
            state.isImageLoading = false
            state.isImageError = true
            state.imageMessage = action.payload
            state.images = []
        })
        .addCase(getImages.pending, (state) => {
            state.isImageLoading = true
        })
        .addCase(getImages.fulfilled, (state, action) => {
            state.isImageLoading = false
            state.isImageSuccess = true
            state.images = action.payload
        })
        .addCase(getImages.rejected, (state, action) => {
            state.isImageLoading = false
            state.isImageError = true
            state.imageMessage = action.payload
            state.images = []
        })
    }
    
})

export const { reset } = imageSlice.actions
export default imageSlice.reducer