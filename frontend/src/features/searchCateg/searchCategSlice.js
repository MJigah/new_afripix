import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "./searchCategService";


const initialState = {
    category: null,
    isSearchedLoading : false,
    isSearchedError : false,
    isSearchedSuccess : false,
    searchedMessage : '',
}

export const getCategoryImages = createAsyncThunk(
    "category/get",
    async (id, thunkAPI) => {
      try {
        return await categoryService.getOne(id);
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
  );


export const searchedCategSlice = createSlice({
    name: "searchedCategory",
    initialState,
    reducers: {
      searchReset: (state) => {
            state.searchedCategory = null
            state.isSearchedLoading = false
            state.isSearchedError = false
            state.isSearchedSuccess = false
            state.searchedMessage = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCategoryImages.pending, (state) => {
            state.isSearchedLoading = true;
          })
          .addCase(getCategoryImages.fulfilled, (state, action) => {
            state.isSearchedLoading = false;
            state.isSearchedSuccess = true;
            state.category = action.payload;
          })
          .addCase(getCategoryImages.rejected, (state, action) => {
            state.isSearchedLoading = false;
            state.isSearchedError = true;
            state.searchedMessage = action.payload;
            state.category = null;
          })
    }
    
})

export const { searchReset } = searchedCategSlice.actions
export default searchedCategSlice.reducer