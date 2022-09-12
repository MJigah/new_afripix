import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

const categories = JSON.parse(localStorage.getItem("categories"));

const initialState = {
  categories: categories ? categories : [],
  isCategoriesLoading: false,
  isCategoriesError: false,
  isCategoriesSuccess: false,
  categoriesMessage: "",
  searchedCategory: {}
};

export const getCategory = createAsyncThunk(
  "categories/get",
  async (_, thunkAPI) => {
    try {
      return await categoryService.get();
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



// export const upload = createAsyncThunk(
//   "image/upload", async(data, thunkAPI) => {
//       try {
//           const token = thunkAPI.getState().auth.user.token;
//           return await authService.upload(data, token)
//       } catch (error) {
//           const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//       }
//   }

// )

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    reset: (state) => {
      state.isCategoriesLoading = false;
      state.isCategoriesError = false;
      state.isCategoriesSuccess = false;
      state.categoriesMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isCategoriesLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isCategoriesLoading = false;
        state.isCategoriesSuccess = true;
        state.categories = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isCategoriesLoading = false;
        state.isCategoriesError = true;
        state.categoriesMessage = action.payload;
        state.categories = [];
      })
  },
});

export const { reset } = categorySlice.actions;
export default categorySlice.reducer;
