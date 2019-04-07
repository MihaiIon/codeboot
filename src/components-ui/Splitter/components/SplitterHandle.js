import React, { useEffect } from "react";
import PropTypes from "prop-types";

// Reference to the handle component.
const handleRef = React.createRef();

// Used for positioning the handle
// IMPORTANT: There is also a SASS variable named $splitter--handle-size. Both
// variables must have the same value in pixels.
const HANDLE_SIZE = 4;

// Helpers
// ====================================================================================

const setHandlePositionHelper = () => {};

const getPositionHelper = (position, isHorizontal) => {
  return isHorizontal
    ? {
        top: `calc(${100 * position}% - ${HANDLE_SIZE / 2}px)`,
        left: 0
      }
    : {
        top: 0,
        left: `calc(${100 * position}% - ${HANDLE_SIZE / 2}px)`
      };
};

// Component
// ====================================================================================

function SplitterHandle({ isHorizontal, position, setPosition }) {
  useEffect(() => {
    const { top, left } = getPositionHelper(position, isHorizontal);
    handleRef.current.style.top = top;
    handleRef.current.style.left = left;
  });
  return <button type="button" className="c-splitter_handle" ref={handleRef} />;
}

SplitterHandle.propTypes = {
  isHorizontal: PropTypes.bool.isRequired,
  position: PropTypes.number.isRequired,
  setPosition: PropTypes.func.isRequired
};

export default SplitterHandle;
