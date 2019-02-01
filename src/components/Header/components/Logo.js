import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <button type="button" className="c-header_logo o-layout_item">
        <span className="c-header_logo_code">code</span>
        <span className="c-header_logo_boot">Boot</span>
        <span className="c-header_logo_version">v3.0</span>
      </button>
    );
  }
}

export default Logo;
