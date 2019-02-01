import React, { Component } from "react";
import PropTypes from "prop-types";

// Import components
import Footer from "../Footer";
import Header from "../Header";
import { Overlay } from "../../components-ui";

class App extends Component {
  render() {
    return (
      <div id="js-app" className="c-app">
        <Header />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
