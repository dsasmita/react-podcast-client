import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PodcastList from "./pages/PodcastList.js";
import PodcastDetail from "./pages/PodcastDetail.js";

import "./assets/main.css";

const RootApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PodcastList} />
      <Route exact path="/:id" component={PodcastDetail} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<RootApp />, document.getElementById("root"));
