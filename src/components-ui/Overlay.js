import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import { AnimatedComponent } from "../components-anim";

class Overlay extends Component {
  render() {
    const { action, mount } = this.props;
    return (
      <aside>
        <AnimatedComponent wrapper="div" className="c-overlay o-overlay" mount={mount}>
          <div
            style={{ height: "100%" }}
            aria-label="close-navigation"
            onClick={() => action()}
            onKeyPress={null}
            tabIndex={0}
            role="button"
          />
        </AnimatedComponent>
      </aside>
    );
  }
}

Overlay.propTypes = {
  mount: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired
};

export default Overlay;
