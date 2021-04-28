import { render } from "preact";
import { App } from "./app";
import { Router, Route } from "preact-router";
import "react-circular-progressbar/dist/styles.css";
import "./index.css";
import PDFDoc from "./components/PDFDoc";

render(
  <Router>
    <Route path="/" component={App} />
    <Route path="/file/:file" component={PDFDoc} />
  </Router>,
  document.getElementById("app")!
);
