import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPages } from "../helpers/helpers";
import { getMoviesLoading } from "../redux/slices/moviesSlice";

const useMovies = ({ type, target }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const pages = getPages();

  useEffect(() => {
    dispatch(getMoviesLoading({ page, type }));
  }, [dispatch, page, type, target]);

  const selectPage = useCallback(
    (event) => {
      setPage(event.target.value);
      dispatch(getMoviesLoading({ page, type }));
    },
    [dispatch, page, type]
  );

  return { pages, selectPage };
};

export default useMovies;
