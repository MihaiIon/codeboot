import React from "react";
import ReactDOM from "react-dom";

// Styles
import "./scss/main.scss";

// Components
import Root from "./components/Root";

// Render App

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Root />, document.getElementById("root"));
