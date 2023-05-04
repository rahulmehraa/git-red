import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleClassTrending:true
}

const swiperSlice = createSlice({
    name:"swiper",
    initialState,
    reducers: {
        setToggleClassTrending:(state,action) =>{
            state.toggleClassTrending = action.payload ;
        },
    },
});

export const {setToggleClassTrending} = swiperSlice.actions ;
export default swiperSlice.reducer;