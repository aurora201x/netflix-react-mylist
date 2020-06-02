import React from "react";
import { Provider } from "react-redux";
import "./styles.css";

import Container from "./container/ListFrame";
import store from "./redux/store";
import { Headerlogo } from "./Headerlogo";

export default function AppWrapper() {
  return (
    <div className="App">
      <Headerlogo />
      <Provider store={store}>
        <Container />
      </Provider>
    </div>
  );
}
