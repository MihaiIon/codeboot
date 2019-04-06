import React from "react";
import ReactDOM from "react-dom";

// Styles
import "codemirror/lib/codemirror.css";
import "codemirror/theme/eclipse.css";
import "codemirror/mode/javascript/javascript";
import "./scss/main.scss";

// Components
import App from "./components/App";

// Render App

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById("root"));
