import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

// Components
import ModalCancelBtn from "./ModalCancelBtn";
import ModalSubmitBtn from "./ModalSubmitBtn";

// Contexts
import { AppContext } from "../../../components/App";

function ModalFooter({ cancel, cancelText, submitText, isSubmitting }) {
  return (
    <AppContext.Consumer>
      {({ closeModal }) => (
        <footer className="c-modal_footer">
          {cancel && <ModalCancelBtn text={cancelText} closeModal={closeModal} />}
          <ModalSubmitBtn text={submitText} closeModal={closeModal} disabled={isSubmitting} />
        </footer>
      )}
    </AppContext.Consumer>
  );
}

ModalFooter.defaultProps = {
  cancel: false,
  cancelText: "Cancel",
  submitText: "Submit"
};

ModalFooter.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  cancel: PropTypes.bool,
  cancelText: PropTypes.string,
  submitText: PropTypes.string
};

export default ModalFooter;
