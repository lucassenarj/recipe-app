import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  AboutPage,
  DetailsPage,
  FavoritesPage,
  HomePage,
} from "./pages";

ReactDOM.render(
  <BrowserRouter history={createBrowserHistory()} basename="/recipe-app/">
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/recipe/:slug" component={DetailsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/favorites" component={FavoritesPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
