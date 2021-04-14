import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "person",
  initialState: {
    person: null,
    social: null,
    movies: null,
    status: "idle",
    error: null,
  },
  reducers: {
    getPersonLoading: (state) => {
      state.status = "loading";
    },
    getPersonSuccessed: (state, action) => {
      state.status = "success";
      state.person = action.payload.person;
      state.social = action.payload.social;
      state.movies = action.payload.movies;
    },
    getPersonError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    clearPersonInfo: (state) => {
      state.person = null;
      state.social = null;
      state.movies = null;
      state.status = "idle";
    },
  },
});

export const {
  getPersonLoading,
  getPersonSuccessed,
  getPersonError,
  clearPersonInfo,
} = personSlice.actions;

export default personSlice.reducer;
