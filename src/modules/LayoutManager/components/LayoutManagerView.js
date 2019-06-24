import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

// Helpers
// ====================================================================================

/**
 * Adjusts the view size to follow the handle.
 *
 * @param {Number} index View position
 * @param {Boolean} isHorizontal TODO
 * @param {Number} handlePosition TODO
 */
const getStyles = (index, isHorizontal, handlePosition) => {
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

function LayoutManagerView({ children, only, show, index, isHorizontal, handlePosition }) {
  return (
    <div
      className={cn("c-layout-manager_view", ["-only", only], ["-show", show], `-index--${index}`)}
      style={!only ? getStyles(index, isHorizontal, handlePosition) : null}
    >
      {children}
    </div>
  );
}

LayoutManagerView.propTypes = {
  only: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  isHorizontal: PropTypes.bool.isRequired,
  handlePosition: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default LayoutManagerView;
