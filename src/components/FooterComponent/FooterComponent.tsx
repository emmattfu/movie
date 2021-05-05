import React, { FC } from "react";
import "./FooterComponent.css";

const FooterComponent: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-iner'>
        <p>This app was made for studying</p>
        <p>
          Big thanks for Api to{" "}
          <a href='https://www.themoviedb.org'>https://www.themoviedb.org</a>
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
