import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import registerReducer from "./slices/registerSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
  },
});
