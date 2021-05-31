import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    width: window.innerWidth,
  },
  reducers: {
    getWidth: (state, action) => {
      state.width = action.payload;
    },
  },
});

export const { getWidth } = appSlice.actions;

export default appSlice.reducer;
