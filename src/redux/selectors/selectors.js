import { createSelector } from "@reduxjs/toolkit";

const getState = (state) => state;

export const moviesSelector = createSelector(
  getState,
  (state) => state.movies.movies.results
);

export const showsSelector = createSelector(
  getState,
  (state) => state.shows.shows.results
);

export const peopleSelector = createSelector(
  getState,
  (state) => state.data.people
);

export const personSelector = createSelector(
  getState,
  (state) => state.data.person
);
