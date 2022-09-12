import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import selectImageService from "./selectImageService";


const initialState = {
    singleImage: {},
    isSelectedLoading: false,
    isSelectedError: false,
    isSelectedSuccess: false,
    selectedMessage: '',
    relatedImages: null,
    isRelatedLoading: false,
    isRelatedError: false,
    isRelatedSuccess: false,
    relatedMessage: ''
}

export const selectedImage = createAsyncThunk(
    "selectImage/selectedImage", async(id, thunkAPI) => {
        try {
            return await selectImageService.selectImage(id)
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

export const getRelatedImages = createAsyncThunk(
    "relatedImage/get", async(id, thunkAPI) => {
        try {
            return await selectImageService.relatedImages(id)
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

export const selectImageSlice = createSlice({
    name: "selectImage",
    initialState,
    reducers: {
        reset: (state) => {
            state.singleImage = {}
            state.isSelectedLoading = false
            state.isSelectedError = false
            state.isSelectedSuccess = false
            state.selectedMessage = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(selectedImage.pending, (state) => {
            state.isSelectedLoading = true
        })
        .addCase(selectedImage.fulfilled, (state, action) => {
            state.isSelectedLoading = false
            state.isSelectedSuccess = true
            state.singleImage = action.payload
        })
        .addCase(selectedImage.rejected, (state, action) => {
            state.isSelectedLoading = false
            state.isSelectedError = true
            state.selectedMessage = action.payload
            state.singleImage = {}
        })
        .addCase(getRelatedImages.pending, (state) => {
            state.isRelatedLoading = true
        })
        .addCase(getRelatedImages.fulfilled, (state, action) => {
            state.isRelatedLoading = false
            state.isRelatedSuccess = true
            state.relatedImages = action.payload
        })
        .addCase(getRelatedImages.rejected, (state, action) => {
            state.isRelatedLoading = false
            state.isRelatedError = true
            state.relatedMessage = action.payload
            state.relatedImages = null
        })
    }
    
})

export const { reset } = selectImageSlice.actions
export default selectImageSlice.reducer