import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";

// Store
import configureStore from "../configureStore";

// Import components
import App from "./App";

const { store } = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
