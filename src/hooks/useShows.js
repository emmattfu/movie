import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPages } from "../helpers/helpers";
import { getShowsLoading } from "../redux/slices/showsSlice";
import { showsTotalPagesSelector } from "../redux/selectors/selectors";

const useMovies = ({ type }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const totalPages = useSelector(showsTotalPagesSelector);
  const pages = getPages(totalPages);

  useEffect(() => {
    dispatch(getShowsLoading({ page, type }));
  }, [dispatch, page, type]);

  const selectPage = useCallback(
    (event) => {
      setPage(event.target.value);
      dispatch(getShowsLoading({ page, type }));
    },
    [dispatch, page, type]
  );

  return { pages, selectPage };
};

export default useMovies;
