import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import categorySliceReducer from "../features/categoryslice";
import partnerSliceReducer from "../features/partnerSlice";
import testimonialReducer from "../features/testimonialSlice";
import loginModalSliceReducer from "../features/loginModalSlice";
import filterSliceReducer from "../features/filterSlice";
import swiperSliceReducer from "../features/swiperSlice";
import registerModalSliceReducer from "../features/registerModalSlice";
import courseSliceReducer from "../features/coursesSlice";
import paginationSliceReducer from "../features/paginationSlice";
import cartSliceReducer from "../features/cartSlice";
import productSliceReducer from "../features/productSlice";
const middleware = [...getDefaultMiddleware(), logger];

 const store = configureStore({
  reducer: {
    category: categorySliceReducer,
    partner: partnerSliceReducer,
    testimonial: testimonialReducer,
    course: courseSliceReducer,
    pagination: paginationSliceReducer,
    modal: loginModalSliceReducer,
    filter: filterSliceReducer,
    swiper: swiperSliceReducer,
    registerModal: registerModalSliceReducer,
    cart:cartSliceReducer,
    product:productSliceReducer,
  },
  middleware,
});

export default store;