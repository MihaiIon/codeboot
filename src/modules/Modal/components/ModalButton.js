import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

/* eslint-disable react/button-has-type */

function ModalButton({ submit, disabled, text, action }) {
  return (
    <button
      disabled={submit && disabled}
      type={submit ? "submit" : "button"}
      className={cn("c-modal_btn o-btn", ["-main", submit])}
      onClick={action}
    >
      {text}
    </button>
  );
}

ModalButton.defaultProps = {
  disabled: false,
  submit: false,
  action: null
};

ModalButton.propTypes = {
  disabled: PropTypes.bool,
  submit: PropTypes.bool,
  text: PropTypes.string.isRequired,
  action: PropTypes.func
};

export default ModalButton;
