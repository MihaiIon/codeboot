import React from "react";
import PropTypes from "prop-types";

// Components
import { animated as a, Transition } from "react-spring/renderprops";

function Overlay({ show }) {
  return (
    <Transition items={show} from={{ opacity: 0 }} leave={{ opacity: 0 }} enter={{ opacity: 1 }}>
      {isOverlay => props =>
        isOverlay && <a.aside key="app_overlay" className="o-overlay" style={props} />}
    </Transition>
  );
}

Overlay.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Overlay;
