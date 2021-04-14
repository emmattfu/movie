import React from "react";
import PeopleDetailsBigWidth from "./PeopleDetailsBigWidth";
import PeopleDetailsSmallWidth from "./PeopleDetailsSmallWidth";
import { useSelector, useDispatch } from "react-redux";
import { widthSelector } from "../../redux/selectors/selectors";
import { getPersonLoading } from "../../redux/slices/personSlice";

function PeopleDetails({ match }) {
  const id = match.params.id;
  const dispatch = useDispatch();

  const pageWidth = useSelector(widthSelector);

  dispatch(getPersonLoading(id));

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
