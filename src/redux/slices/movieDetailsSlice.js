import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movie: null,
    accounts: null,
    credits: null,
    status: "idle",
    error: null,
  },
  reducers: {
    getMovieDetailsLoading: (state, action) => {
      state.status = "loading";
    },
    getMovieDetailsSuccessed: (state, action) => {
      state.status = "success";
      state.movie = action.payload.movie;
      state.accounts = action.payload.accounts;
      state.credits = action.payload.credits;
    },
    getMovieDetailsError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    clearMovieDetails: (state) => {
      state.status = "loading";
      state.movie = null;
      state.accounts = null;
      state.credits = null;
    },
  },
});

export const {
  getMovieDetailsLoading,
  getMovieDetailsSuccessed,
  getMovieDetailsError,
  clearMovieDetails,
} = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
