import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  reducers: {
    getMoviesLoading: (state, action) => {
      state.status = "loading";
    },
    getMoviesSuccessed: (state, action) => {
      state.movies = action.payload;
      state.status = "success";
    },
    getMoviesError: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
  },
});

export const {
  getMoviesLoading,
  getMoviesSuccessed,
  getMoviesError,
} = moviesSlice.actions;

export default moviesSlice.reducer;
