import { render } from "preact";
import { App } from "./app";
import "react-circular-progressbar/dist/styles.css";
import "./index.css";

render(<App />, document.getElementById("app")!);
