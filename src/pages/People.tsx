import React, { FC } from "react";
import PeopleComponent from "../components/PeopleComponent/PeopleComponent";
import useMovies from "../hooks/useMovies";
import { PEOPLE, POPULAR_PEOPLE } from "../redux/types";

const People: FC = () => {
  const { pages, selectPage } = useMovies(POPULAR_PEOPLE, PEOPLE);

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
};

export default People;
