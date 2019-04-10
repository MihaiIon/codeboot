import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

// Components
import ClearIcon from "react-ionicons/lib/IosTrash";

function ConsoleClearButton({ clear }) {
  return (
    <button type="button" onClick={clear} className="c-console_clear-btn">
      <ClearIcon className="c-console_clear-btn_icon" color="current" />
    </button>
  );
}

ConsoleClearButton.propTypes = {
  clear: PropTypes.func.isRequired
};

export default ConsoleClearButton;
