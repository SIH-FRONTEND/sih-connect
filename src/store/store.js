import { configureStore } from "@reduxjs/toolkit";

//importing slices
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: { auth: authSlice.reducer },
});
