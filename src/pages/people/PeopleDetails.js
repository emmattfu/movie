import React from "react";
import PeopleDetailsBigWidth from "./PeopleDetailsBigWidth";
import PeopleDetailsSmallWidth from "./PeopleDetailsSmallWidth";
import { useSelector, useDispatch } from "react-redux";
import { getPerson } from "../../redux/actions.js";


function PeopleDetails({ match }) {
  const id = match.params.id;
  const dispatch = useDispatch()


  const pageWidth = useSelector(state => state.appReducer.width)


  dispatch(getPerson(id))



  return (
    <>
      {pageWidth < 1000 ? (
        <PeopleDetailsSmallWidth
      
        />
      ) : (
        <PeopleDetailsBigWidth  />
      )}
    </>
  );
}

export default PeopleDetails;
