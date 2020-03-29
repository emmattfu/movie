import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPeople } from "../redux/actions";
import PeopleComponent from "../components/PeopleComponent/PeopleComponent";

function People() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const pages = [];

  dispatch(getPeople(page));

  for (let i = 1; i <= 100; i++) {
    pages.push(i);
  }

  function selectPage(event) {
    setPage(event.target.value);
    dispatch(getPeople(page));
  }

  return (
    <>
      <div className="container">
        <div className="page-header">
          <h1>Popular People</h1>
          <div>
            Page:
            <select name="page-number" onChange={selectPage}>
              {pages.map(el => (
                <option key={el}>{el}</option>
              ))}
            </select>
          </div>
        </div>

        <PeopleComponent />
      </div>
    </>
  );
}

export default People;
