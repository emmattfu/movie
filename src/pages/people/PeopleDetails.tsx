import React, { useEffect } from "react";
import PeopleDetailsBigWidth from "./PeopleDetailsBigWidth";
import PeopleDetailsSmallWidth from "./PeopleDetailsSmallWidth";
import { useSelector, useDispatch } from "react-redux";
import { widthSelector } from "../../redux/selectors/selectors";
import { getPersonLoading } from "../../redux/slices/personSlice";
import { useParams } from "react-router";

function PeopleDetails() {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const pageWidth = useSelector(widthSelector);

  useEffect(() => {
    dispatch(getPersonLoading(id));
  }, [dispatch, id]);

  return (
    <>
      {pageWidth < 1000 ? (
        <PeopleDetailsSmallWidth />
      ) : (
        <PeopleDetailsBigWidth />
      )}
    </>
  );
}

export default PeopleDetails;
