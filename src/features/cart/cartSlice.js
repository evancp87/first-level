import { createSlice } from "@reduxjs/toolkit";
import { sumItems } from "../../utils/helpers";

const initialState = {
  items: [],
  count: 1,
  ...sumItems([]),
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      state.total = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      state.count = state.items.reduce((total, item) => total + item.price, 0);
    },

    removeFromCart: (state, action) => {
      const indexOf = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(indexOf, 1);
      state.count -= 1;
    },

    clear: () => {
      return { ...initialState };
    },
  },
});

export const { removeFromCart, addToCart, clear } = cartSlice.actions;

export const selectEmpty = (state) => state.cart.empty;
export const selectItems = (state) => state.cart.items;
export const selectCount = (state) => state.cart.count;
export const selectTotal = (state) => state.cart.total;

export default cartSlice.reducer;
