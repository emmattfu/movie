import { getMoviesLoading } from "../redux/slices/moviesSlice";
import { getShowsLoading } from "../redux/slices/showsSlice";

export const getPages = (totalPages = 100) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return pages;
};

export const choseTarget = (target, dispatch, page, type) => {
  if (target === "movies") {
    dispatch(getMoviesLoading({ page, type }));
  } else {
    dispatch(getShowsLoading({ page, type }));
  }
};
