import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  clearMovieDetails,
  getMovieDetailsLoading,
} from "../redux/slices/movieDetailsSlice";

const useMovieDetails = (id: string): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMovieDetails());
    dispatch(getMovieDetailsLoading(+id));
  }, [dispatch, id]);
};

export default useMovieDetails;
