import { createSlice } from "@reduxjs/toolkit";
import { fetchPartnerApi } from "../service/service";

const partnersSlice = createSlice({
  name: "fetchPartnerApi",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPartnerApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPartnerApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log("From payload", state.data);
    });
    builder.addCase(fetchPartnerApi.rejected, (state, action) => {
      console.log("Error from slice", action.payload);
      state.isError = true;
    });
  },
});

export default partnersSlice.reducer;
