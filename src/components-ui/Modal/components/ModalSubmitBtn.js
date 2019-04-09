import React from "react";
import PropTypes from "prop-types";

function ModalSubmitBtn({ text, closeModal, disabled }) {
  return (
    <button
      type="submit"
      className="c-modal_btn o-btn -main"
      onClick={() => {
        closeModal();
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

ModalSubmitBtn.propTypes = {
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ModalSubmitBtn;
