import React from "react";
import PropTypes from "prop-types";

// Components
import { animated as a, useTransition } from "react-spring";

function Overlay({ isOverlay }) {
  const transitions = useTransition(isOverlay, null, {
    from: { opacity: "0" },
    enter: { opacity: "1" },
    leave: { opacity: "0" }
  });
  return transitions.map(
    ({ item, props }) => item && <a.aside key="app_overlay" className="o-overlay" style={props} />
  );
}

Overlay.propTypes = {
  isOverlay: PropTypes.bool.isRequired
};

export default Overlay;
