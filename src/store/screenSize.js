import { createSlice } from "@reduxjs/toolkit";

const screenSize = createSlice({
  name: "screen_size",
  initialState: { screenSize: window.innerWidth },
  reducers: {
    changeScreenSize(state, payload) {
      state.screenSize = payload.payload;
    },
  },
});

export default screenSize;
export const screenSizeAction = screenSize.actions;
