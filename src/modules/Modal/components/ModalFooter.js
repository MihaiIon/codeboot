import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

// Components
import ModalButton from "./ModalButton";

// Contexts
import { AppContext } from "../../../components/App";

function ModalFooter({ cancel, cancelText, submitText, isSubmitting }) {
  return (
    <AppContext.Consumer>
      {({ hideModal }) => (
        <footer className="c-modal_footer">
          {cancel && <ModalButton text={cancelText} action={hideModal} />}
          <ModalButton
            submit
            text={submitText}
            disabled={isSubmitting}
            action={() => hideModal()}
          />
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
