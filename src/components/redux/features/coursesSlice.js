import { createSlice } from "@reduxjs/toolkit";
import { fetchCourseApi } from "../service/service";



const courseSlice = createSlice({
  name: "fetchCourseApi",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourseApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCourseApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log("From payload",state.data);
    });
    builder.addCase(fetchCourseApi.rejected, (state, action) => {
      console.log("Error from slice", action.payload);
      state.isError = true;
    });
  },
});

export default courseSlice.reducer;