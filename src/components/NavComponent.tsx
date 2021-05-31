import React, { FC, useCallback, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const NavComponent: FC = () => {
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    navRef.current?.classList.remove("show");
  }, []);

  const memoizedBurgerToggleHandle = useCallback(() => {
    navRef.current?.classList.toggle("show");
  }, []);

  return (
    <nav>
      <ul className='nav' ref={navRef}>
        <li className='nav-item-main'>
          <NavLink to='/movies'>MOVIES</NavLink>
          <ul className='nav movie-nav'>
            <li className='nav-item'>
              <NavLink to='/movies/popular'>Popular</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/movies/top-rated'>Top Rated</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/movies/upcoming'>Upcoming</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/movies/now-playing'>Now Playing</NavLink>
            </li>
          </ul>
        </li>
        <li className='nav-item-main'>
          <NavLink to='/shows'>TV SHOWS</NavLink>
          <ul className='nav movie-nav'>
            <li className='nav-item'>
              <NavLink to='/shows/popular'>Popular</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/shows/top-rated'>Top Rated</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/shows/on-tv'>On TV</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/shows/airing-today'>Airing Today</NavLink>
            </li>
          </ul>
        </li>
        <li className='nav-item-main'>
          <NavLink to='/people'>People</NavLink>
        </li>
      </ul>
      <button
        className='burger'
        type='button'
        id='burger'
        onClick={memoizedBurgerToggleHandle}
      >
        <span className='burger-item'></span>
      </button>
    </nav>
  );
};

export default NavComponent;
