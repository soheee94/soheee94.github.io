import React from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ScrollProvider } from "./ScrollContext";

ReactDOM.render(
  <ScrollProvider>
    <App />
  </ScrollProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
