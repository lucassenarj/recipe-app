import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { HomePage, RecipesPage } from "./pages";

ReactDOM.render(
  <BrowserRouter history={createBrowserHistory()}>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/recipes" component={RecipesPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
