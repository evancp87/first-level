import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import characterReducer from "../src/features/character/characterSlice";
import controlsReducer from "../src/features/controls/controlsSlice";
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    character: characterReducer,
    controls: controlsReducer,
  },
});
