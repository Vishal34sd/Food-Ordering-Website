import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    // Remove item by id
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    // Clear entire cart
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
