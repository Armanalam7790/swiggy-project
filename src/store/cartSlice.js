import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    // Fixed: removes item by id instead of blindly popping last item
    removeItem: (state, action) => {
      const items = state.items;
      for (let i = items.length - 1; i >= 0; i--) {
        if (items[i].card.info.id === action.payload) {
          items.splice(i, 1);
          break;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;