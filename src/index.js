import React from "react";
import ReactDOM from "react-dom";
import "./style/main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom"; // browsuerRouter 불러오기

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
