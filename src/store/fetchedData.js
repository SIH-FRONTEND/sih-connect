import { createSlice } from "@reduxjs/toolkit";

const fetchedDataSlice = createSlice({
  name: "user-data",
  initialState: { fetchedDetails: null },
  reducers: {
    storeUser(state, payload) {
      state.fetchedDetails = payload.payload;
    },
    discardUser(state, payload) {
      state.fetchedDetails = null;
    },
  },
});

export const fetchedDataActions = fetchedDataSlice.actions;

export default fetchedDataSlice;
