import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPages } from "../helpers/helpers";
import { getPeopleLoading } from "../redux/slices/peopleSlice";

const usePeople = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const pages = getPages();

  useEffect(() => {
    dispatch(getPeopleLoading({ page }));
  }, [dispatch, page]);

  const selectPage = useCallback(
    (event) => {
      setPage(event.target.value);
      dispatch(getPeopleLoading({ page }));
    },
    [dispatch, page]
  );

  return { pages, selectPage };
};

export default usePeople;
