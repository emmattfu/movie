import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    search: null,
    width: window.innerWidth,
  },
  reducers: {
    search: (state, action) => {
      state.search = action.payload;
    },
    getWidth: (state, action) => {
      state.width = action.payload;
    },
  },
});

export const { search, getWidtch } = appSlice.actions;

export default appSlice.reducer;
