import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

function Toaster({ value, show }) {
  return <div className={cn("c-app_toaster", ["-show", show])}>{value}</div>;
}

Toaster.propTypes = {
  show: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

export default Toaster;
