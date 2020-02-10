import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./assets/main.css";

const PodcastList = lazy(() => import("./pages/PodcastList.js"));
const PodcastDetail = lazy(() => import("./pages/PodcastDetail.js"));

const RootApp = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={PodcastList} />
        <Route exact path="/:id" component={PodcastDetail} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

ReactDOM.render(<RootApp />, document.getElementById("root"));
