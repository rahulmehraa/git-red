import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

const registerModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleShowModal: (state, action) => {
      state.isOpen = true;
    },
    handleCloseModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { handleShowModal, handleCloseModal } = registerModalSlice.actions;

export default registerModalSlice.reducer;
