import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import History from "../pages/History";

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/history" component={History} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
