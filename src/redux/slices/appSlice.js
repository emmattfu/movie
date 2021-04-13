import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    search: null,
    width: window.innerWidth,
  },
  reducers: {
    search: (state, action) => {
      console.log(action.payload);
      state.search = action.payload;
    },
    getWidth: (state, action) => {
      state.width = action.payload;
    },
  },
});

export const { search, getWidth } = appSlice.actions;

export default appSlice.reducer;
