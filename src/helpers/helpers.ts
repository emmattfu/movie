import { Dispatch } from "react";
import api from "../Api";
import { getMoviesLoading } from "../redux/slices/moviesSlice";
import { getPeopleLoading } from "../redux/slices/peopleSlice";
import { getShowsLoading } from "../redux/slices/showsSlice";
import { MOVIE, PEOPLE, TV } from "../redux/types";
import { IResponce } from "../types/types";
import axios from "axios";

export const getPages = (totalPages = 100) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return pages;
};

export const chooseRequestTarget = (
  type: string,
  pageType: string,
  page: number,
  dispatch: Dispatch<any>
): void => {
  if (pageType === MOVIE) {
    dispatch(getMoviesLoading({ page, type }));
  }

  if (pageType === TV) {
    dispatch(getShowsLoading({ page, type }));
  }

  if (pageType === PEOPLE) {
    dispatch(getPeopleLoading({ page, type }));
  }
};

export const fetchMovies = async (
  type: string,
  page: number
): Promise<IResponce> => {
  const resp = await axios.get<IResponce>(
    `${api().name}/movie/${type}?api_key=${api().key}&region=US&page=${page}`
  );

  return resp.data;
};
