import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import * as Sentry from "@sentry/browser";
import Logger from "./services/logService";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/* Sentry.init({
  dsn: "https://6c1d535b65a6448d9142a79b2e8fc234@sentry.io/1488269"
}); */
Logger.init();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
