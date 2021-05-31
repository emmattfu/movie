import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { chooseRequestTarget, getPages } from "../helpers/helpers";

const useMovies = (
  type: string,
  pageType: string
): {
  pages: number[];
  selectPage: (event: React.ChangeEvent<HTMLSelectElement>) => void;
} => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const pages = getPages();

  useEffect(() => {
    chooseRequestTarget(type, pageType, page, dispatch);
  }, [dispatch, page, type, pageType]);

  const selectPage = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPage(+event.target.value);
      chooseRequestTarget(type, pageType, page, dispatch);
    },
    [dispatch, page, type, pageType]
  );

  return { pages, selectPage };
};

export default useMovies;
