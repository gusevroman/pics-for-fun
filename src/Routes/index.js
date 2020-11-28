import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import History from "../pages/History";
import Gallery from "../pages/Gallery";

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/history" component={History} />
    <Route path="/gallery" component={Gallery} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
