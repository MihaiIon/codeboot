import React from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../../components/App";

function ModalCancelBtn({ text }) {
  return (
    <AppContext.Consumer>
      {({ closeModal }) => (
        <button type="button" className="c-modal_btn o-btn" onClick={closeModal}>
          {text}
        </button>
      )}
    </AppContext.Consumer>
  );
}

ModalCancelBtn.defaultProps = {
  text: "Cancel"
};

ModalCancelBtn.propTypes = {
  text: PropTypes.string
};

export default ModalCancelBtn;
