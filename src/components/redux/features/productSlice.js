import { createSlice } from "@reduxjs/toolkit";
import { fetchProductApi } from "../service/service";

const productReducer = createSlice({
    name: "fetchProductApi",
    initialState: {
        isLoading:false , 
        data:[],
        isError:false,
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchProductApi.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProductApi.fulfilled, (state,action) =>{
            state.isLoading = false ;
            state.data = action.payload;
        });
        builder.addCase(fetchProductApi.rejected, (state) =>{
            state.isError = true ;
        })
    },
});

export default productReducer.reducer ;