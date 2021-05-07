import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../../types/types";

const getState = (state: IStore) => state;

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
  (state) => state.people.people
);

export const personSelector = createSelector(
  getState,
  (state) => state.person.person
);

export const personSocialSelector = createSelector(
  getState,
  (state) => state.person.social
);

export const personMoviesSelector = createSelector(
  getState,
  (state) => state.person.movies
);

export const widthSelector = createSelector(
  getState,
  (state) => state.app.width
);

export const searchSelector = createSelector(
  getState,
  (state) => state.searchResult.searchResult
);

export const showDetailsSelector = createSelector(
  getState,
  (state) => state.showDetails
);

export const movieDetailsSelector = createSelector(
  getState,
  (state) => state.movieDetails
);
