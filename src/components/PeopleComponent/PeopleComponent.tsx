import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { peopleSelector } from "../../redux/selectors/selectors";
import { pages } from "../../constants";
import { IKnownForMovie, IKnownForShow } from "../../types/types";
import PeopleKnownForShowComponent from "../PeopleKnownForComponent/PeopleKnownForShowComponent";
import PeopleKnownForMovieComponent from "../PeopleKnownForComponent/PeopleKnownForMovieComponent";

const PeopleComponent: FC = () => {
  const people = useSelector(peopleSelector);

  if (!people.length) {
    return (
      <div className='container'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='content-wrapper people'>
      {people.map((elem) => {
        return (
          <div className='people-card' key={elem.id}>
            <div className='people-poster'>
              <NavLink to={`${pages.PEOPLE.DEFAULT_PATH}/${elem.id}`}>
                <img
                  className='people-img'
                  src={`https://image.tmdb.org/t/p/original/${elem.profile_path}`}
                  alt='popular-people'
                ></img>
              </NavLink>
            </div>
            <div className='people-info'>
              <p className='people-name'>{elem.name}</p>

              {elem.known_for.map((film, i) => {
                if (film.media_type === "movie") {
                  return (
                    <PeopleKnownForMovieComponent
                      key={i}
                      film={film as IKnownForMovie}
                    />
                  );
                } else {
                  return (
                    <PeopleKnownForShowComponent
                      key={i}
                      film={film as IKnownForShow}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PeopleComponent;
