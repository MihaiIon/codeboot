import React, { Component } from "react";
import PropTypes from "prop-types";

// Import components
import Header from "../Header";
import { Overlay } from "../../components-ui";

class App extends Component {
  render() {
    return (
      <div id="js-app" className="c-app">
        <Header />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
