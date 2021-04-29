import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { DetailsPage, HomePage, RecipesPage } from "./pages";

ReactDOM.render(
  <BrowserRouter history={createBrowserHistory()} basename="/recipe-app/">
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/recipe/:slug" component={DetailsPage} />
      <Route path="/recipes" component={RecipesPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
