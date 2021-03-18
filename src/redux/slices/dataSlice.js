import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    movies: [],
    shows: [],
    people: [],
    person: [],
    pageCount: 0,
  },
  reducers: {
    getMovies: (state, actinon) => {
      state.movies = actinon.payload;
    },
    getShows: (state, actinon) => {
      state.shows = actinon.payload;
    },
    getPeople: (state, actinon) => {
      state.people = actinon.payload;
    },
    getPerson: (state, actinon) => {
      state.person = actinon.payload;
    },
    clearPersonInfo: (state) => {
      state.person = [];
    },
  },
});

export const {
  getMovies,
  getPeople,
  getPerson,
  clearPersonInfo,
} = dataSlice.actions;

export default dataSlice.reducer;
