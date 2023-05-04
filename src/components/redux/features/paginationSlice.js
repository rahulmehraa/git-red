import { createSlice } from "@reduxjs/toolkit";
import { fetchPaginationApi } from "../service/service";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    currentPage: "1",
    limit: "6",
    toggleClassPagination:true, 
    totalData:0
  },

  reducers: {
    setPageClick: (state, action) => {
      state.currentPage = action.payload;
      console.log("Redux current page", state.currentPage);
    },
    setToggleClassPagination:(state,action) =>{
        state.toggleClassPagination = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPaginationApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPaginationApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.totalData = action.payload.totalData
      console.log("total",state.totalData);
    });
    builder.addCase(fetchPaginationApi.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const { setPageClick , setToggleClassPagination } = paginationSlice.actions;
export default paginationSlice.reducer;
