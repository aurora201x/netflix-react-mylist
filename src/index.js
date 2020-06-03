import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import "./styles.css";

import App from "./App";
import store from "./redux/store";
import { Headerlogo } from "./Headerlogo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Headerlogo />
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>,
  rootElement
);
