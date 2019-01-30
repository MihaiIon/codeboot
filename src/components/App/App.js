import React, { Component } from "react";
import PropTypes from "prop-types";

// Import components
import { Overlay } from "../../components-ui";

class App extends Component {
  render() {
    const { isOverlay, isLoading, closeNavigationsAndMenus } = this.props;
    return <div id="js-app" className="c-app" />;
  }
}

App.propTypes = {};

export default App;
