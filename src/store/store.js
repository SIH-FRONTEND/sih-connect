import { configureStore } from "@reduxjs/toolkit";

//importing slices
import authSlice from "./authSlice";
import fetchedDataSlice from "./fetchedData";
import screenSize from "./screenSize";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    fetchedUser: fetchedDataSlice.reducer,
    screenSize: screenSize.reducer,
  },
});
