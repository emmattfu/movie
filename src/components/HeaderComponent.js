import React from "react";
import Nav from './NavComponent.js';
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  return (
    <>
      <header className="App-header">
        <div className="header-container">
          <h2>
            <NavLink to="/">The Movie App</NavLink>
          </h2>
          <Nav />
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
