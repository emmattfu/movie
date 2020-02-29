import React from "react";
import { NavLink } from "react-router-dom";

function NavComponent() {
  return (
    <>
        <ul className="nav">
            <li className="nav-item-main">
                <NavLink to="/movies">MOVIES</NavLink>
                <ul className="nav movie-nav">
                <li className="nav-item">
                    <NavLink to="/movies/popular">Popular</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/movies/top-rated">Top Rated</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/movies/upcoming">Upcoming</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/movies/now-playing">Now Playing</NavLink>
                </li>
                </ul>
            </li>
            <li className="nav-item-main">
                <NavLink to="/shows">TV SHOWS</NavLink>
                <ul className="nav movie-nav">
                <li className="nav-item">
                    <NavLink to="/shows/popular">Popular</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/shows/top-rated">Top Rated</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/shows/on-tv">On TV</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/shows/airing-today">Airing Today</NavLink>
                </li>
                </ul>
            </li>
            <li className="nav-item-main">
                <NavLink to="/people">People</NavLink>
            </li>
        </ul>
    </>
  );
}

export default NavComponent;
