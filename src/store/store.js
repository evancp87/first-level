import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/Game/GameSlice";
import cartReducer from "../features/cart/cartSlice";
import dashboardReducer from "../features/Dashboard/dashboardSlice";
import searchInputsReducer from "../features/searchInputs/searchInputsSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";
export const store = configureStore({
  reducer: {
    games: gameReducer,
    cart: cartReducer,
    inputs: searchInputsReducer,
    dashboard: dashboardReducer,
  },
  middleware: [thunk, logger],
});
