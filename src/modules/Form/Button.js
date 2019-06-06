import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

/* eslint-disable react/button-has-type */

function Button({ submit, text, disabled, action }) {
  return (
    <button
      disabled={submit && disabled}
      type={submit ? "submit" : "button"}
      className={cn("o-form_btn o-btn", ["-main", submit])}
      onClick={action}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  submit: false,
  action: null
};

Button.propTypes = {
  disabled: PropTypes.bool,
  submit: PropTypes.bool,
  text: PropTypes.string.isRequired,
  action: PropTypes.func
};

export default Button;
