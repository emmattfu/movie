import React, { FC } from "react";
import "./HeaderComponent.css";
import Nav from "../NavComponent";
import { NavLink } from "react-router-dom";

const HeaderComponent: FC = () => {
  return (
    <>
      <header className='App-header'>
        <div className='header-container'>
          <h2>
            <NavLink to='/'>The Movie App</NavLink>
          </h2>
          <Nav />
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
