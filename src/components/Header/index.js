import React from "react";
import GoogleAuth from "components/auth/googleAuth";
import { Link, NavLink } from "react-router-dom";

import { globalConst } from "components/utils/variables";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header--left">
        <div>
          <b>
            <Link to="/books">ScoopBook</Link>
          </b>
        </div>
      </div>
      <div className="header--right">
        <NavLink exact to="/books" activeClassName="header--right__active">
          <b>{globalConst.linkHome}</b>
        </NavLink>

        <div>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
