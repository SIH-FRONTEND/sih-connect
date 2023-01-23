import { createSlice } from "@reduxjs/toolkit";

const fetchedDataSlice = createSlice({
  name: "user-data",
  initialState: { fetchUser: null },
  reducers: {
    storeUser(state, payload) {
      state.fetchUser = payload.payload;
    },
    discardUser(state, payload) {
      state.fetchUser = null;
    },
  },
});

export const fetchedDataActions = fetchedDataSlice.actions;

export default fetchedDataSlice;
