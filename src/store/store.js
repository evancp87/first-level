import { configureStore } from "@reduxjs/toolkit";
// import gameReducer from "../features/Game/GameSlice";
// import searchReducer from "../features/search/searchSlice";
// import cartReducer from "../features/cart/cartSlice";
// import favoritesReducer from "../features/favorites/favoritesSlice";
import dashboardReducer from "../features/Dashboard/dashboardSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    // games: gameReducer,
    // cart: cartReducer,
    dashboard: dashboardReducer,
    // favorites: favoritesReducer,
    // search: searchReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
