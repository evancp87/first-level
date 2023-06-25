import { createSlice } from "@reduxjs/toolkit";
import { sumItems } from "../../utils/helpers";

const initialState = {
  items: [],
  count: 1,
  ...sumItems([]),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count += 1;
    },
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += state.count;
      } else {
        state.items.push({
          ...action.payload,
          quantity: state.count,
        });
      }
      return {
        ...state,
        ...sumItems(state.items),
      };
    },

    removeFromCart: (state, action) => {
      const indexOf = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(indexOf, 1);
      return {
        ...state,
        count: state.count,
        ...sumItems(state.items),
        items: [...state.items],
      };
    },
    decrement: (state) => {
      state.count = state.count -= 1;
    },
    clear: () => {
      return { ...initialState };
    },
  },
});

export const { increment, decrement, removeFromCart, addToCart, clear } =
  cartSlice.actions;

export const selectEmpty = (state) => state.cart.empty;
export const selectItems = (state) => state.cart.items;
export const selectCount = (state) => state.cart.count;

export default cartSlice.reducer;
