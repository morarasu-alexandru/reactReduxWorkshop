import React from "react";
import { Provider } from "react-redux";

import CustomRouter from "./customRouter";
import store from "./store";

import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <CustomRouter />
    </Provider>
  );
}
