import { render } from "preact";
import { App } from "./app";
import { Router, Route } from "preact-router";
import "react-circular-progressbar/dist/styles.css";
import "./index.css";

render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("app")!
);
