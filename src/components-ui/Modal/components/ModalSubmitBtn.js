import React from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../../components/App";

function ModalSubmitBtn({ text, onSubmit }) {
  return (
    <AppContext.Consumer>
      {({ closeModal }) => (
        <button
          type="submit"
          className="c-modal_btn o-btn -main"
          onClick={() => {
            onSubmit();
            closeModal();
          }}
        >
          {text}
        </button>
      )}
    </AppContext.Consumer>
  );
}

ModalSubmitBtn.defaultProps = {
  text: "Submit"
};

ModalSubmitBtn.propTypes = {
  text: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default ModalSubmitBtn;
