import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryApi } from "../service/service";


const categorySlice = createSlice({
  name: "category",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    filteredData: [],
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCategoryApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategoryApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategoryApi.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default categorySlice.reducer;
