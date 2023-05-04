import { createSlice } from "@reduxjs/toolkit";
import { fetchFilterApi } from "../service/service";
const filterSlice = createSlice({
  name: "filter",
  initialState: {
    isLoading: false,
    isError: false,
    isFilterClicked : false,
    data: [],
    _id: "",
  },
  reducers: {
    
    setFilterClick: (state, action) => {
      if(state.isFilterClicked === false){
        state.isFilterClicked = true
        state._id = ""
        console.log("From false",state._id);
      }
      else if(state.isFilterClicked === true){
        state._id = action.payload;
        state.isFilterClicked = false
        console.log("from true",state._id);
      }
      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilterApi.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilterApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log("redux filter data",state.data)
    });
    builder.addCase(fetchFilterApi.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const { setFilterClick } = filterSlice.actions;
export default filterSlice.reducer;
