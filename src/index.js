import React from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom"; // browsuerRouter 불러오기

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
