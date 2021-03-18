import { createSlice } from "@reduxjs/toolkit";

const showsSlice = createSlice({
  name: "shows",
  initialState: {
    shows: [],
    status: "idle",
    error: null,
  },
  reducers: {
    getShowsLoading: (state) => {
      state.status = "loading";
    },
    getShowsSuccessed: (state, action) => {
      state.shows = action.payload;
      state.status = "success";
    },
    getShowsError: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
  },
});

export const {
  getShowsLoading,
  getShowsSuccessed,
  getShowsError,
} = showsSlice.actions;

export default showsSlice.reducer;
