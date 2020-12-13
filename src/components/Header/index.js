import React from "react";
import GoogleAuth from "components/auth/googleAuth";
import { NavLink } from "react-router-dom";

import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header--left">
        <div>
          <b>ScoopBook</b>
        </div>
      </div>
      <div className="header--right">
        <NavLink exact to="/books" activeClassName="header--right__active">
          <b>Home</b>
        </NavLink>

        <div>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
