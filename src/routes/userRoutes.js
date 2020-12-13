import React from "react";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "routes/privateRoutes";

import Header from "components/Header";
import Home from "components/Home";
import Book from "components/Book";

const UserRoutes = () => {
  return (
    <div>
      <Router history={history}>
        <PrivateRoute path="/books" component={Header} />
        <Switch>
          <PrivateRoute exact path="/books" component={Home} />
          <PrivateRoute exact path="/books/:id" component={Book} />
        </Switch>
      </Router>
    </div>
  );
};

export default UserRoutes;
