import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDetailsSelector } from "../redux/selectors/selectors";
import { getShowDetailsLoading } from "../redux/slices/showDetailsSlice";

const useShowDetails = (id) => {
  const dispatch = useDispatch();
  const { show, accounts, actors } = useSelector(showDetailsSelector);

  useEffect(() => {
    dispatch(getShowDetailsLoading(id));
  }, [dispatch, id]);

  return { show, accounts, actors };
};

export default useShowDetails;
