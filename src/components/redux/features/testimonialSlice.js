import { createSlice } from "@reduxjs/toolkit";
import { fetchTestimonialApi } from "../service/service";

const testimonialReducer = createSlice({
  name: "fetchTestimonialApi",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTestimonialApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTestimonialApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTestimonialApi.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default testimonialReducer.reducer;
