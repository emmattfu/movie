import React from "react";
import usePeople from "../hooks/usePeople";
import PeopleComponent from "../components/PeopleComponent/PeopleComponent";

function People() {
  const { pages, selectPage } = usePeople();

  return (
    <>
      <div className='container'>
        <div className='page-header'>
          <h1>Popular People</h1>
          <div>
            Page:
            <select name='page-number' onChange={selectPage}>
              {pages.map((el) => (
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
