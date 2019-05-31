import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

// Helpers
// ====================================================================================

/**
 * TODO
 *
 * @param {Boolean} isHorizontal TODO
 * @param {Number} index TODO
 * @param {Number} handlePosition TODO
 */
const getStyles = (isHorizontal, index, handlePosition) => {
  if (isHorizontal) {
    return index === 0
      ? { height: `${100 * handlePosition}%` }
      : { height: `${100 * (1 - handlePosition)}%` };
  }
  return index === 0
    ? { width: `${100 * handlePosition}%` }
    : { width: `${100 * (1 - handlePosition)}%` };
};

// Component
// ====================================================================================

function SplitterView({ children, isHorizontal, index, handlePosition }) {
  return (
    <div
      className={`c-layout-manager_view -${index}`}
      style={getStyles(isHorizontal, index, handlePosition)}
    >
      {children}
    </div>
  );
}

SplitterView.propTypes = {
  isHorizontal: PropTypes.bool.isRequired,
  handlePosition: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default SplitterView;
