import React, { useEffect, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import history from "history.js";

import userRoutes from "routes/userRoutes";
import Login from "components/Login";
import PublicRoute from "routes/publicRoute";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <PublicRoute restricted="true" exact path="/" component={Login} />
          <PublicRoute
            restricted="true"
            exact
            path="/login"
            component={Login}
          />
          <Route path="/books" component={userRoutes} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
