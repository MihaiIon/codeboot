import React from "react";
import PropTypes from "prop-types";

function ModalCancelBtn({ text, closeModal }) {
  return (
    <button type="button" className="c-modal_btn o-btn" onClick={closeModal}>
      {text}
    </button>
  );
}

ModalCancelBtn.propTypes = {
  text: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ModalCancelBtn;
