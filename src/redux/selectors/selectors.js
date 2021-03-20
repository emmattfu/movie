import { createSelector } from "@reduxjs/toolkit";

const getState = (state) => state;

export const moviesSelector = createSelector(
  getState,
  (state) => state.movies.movies
);

export const showsSelector = createSelector(
  getState,
  (state) => state.shows.shows
);

export const showsTotalPagesSelector = createSelector(
  getState,
  (state) => state.shows.totalPages
);

export const peopleSelector = createSelector(
  getState,
  (state) => state.data.people
);

export const personSelector = createSelector(
  getState,
  (state) => state.data.person
);

export const widthSelector = createSelector(
  getState,
  (state) => state.app.width
);
