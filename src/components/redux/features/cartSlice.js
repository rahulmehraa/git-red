import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoryApi } from "../service/service";
import {toast} from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info("increased product quantity",{
          position:"bottom-right"
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("Product added to cart",{
          position:"bottom-right"
        })
      }
    },
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

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
