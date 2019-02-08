import React from "react";
import ReactDOM from "react-dom";

// Styles
import "./scss/main.scss";
import "codemirror/theme/eclipse.css";
import "codemirror/lib/codemirror.css";

// Components
import Root from "./components/Root";

// Render App

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Root />, document.getElementById("root"));
