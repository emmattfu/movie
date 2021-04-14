import { createSlice } from "@reduxjs/toolkit";

const showsSlice = createSlice({
  name: "shows",
  initialState: {
    shows: [],
    totalPages: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    getShowsLoading: (state) => {
      state.status = "loading";
    },
    getShowsSuccessed: (state, action) => {
      state.shows = action.payload.shows;
      state.totalPages = action.payload.totalPages;
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
