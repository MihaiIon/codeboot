import React from "react";
import PropTypes from "prop-types";
import { useTransition, animated as a } from "react-spring";
import cn from "classnames-helper";

// Components
import CloseIcon from "react-ionicons/lib/MdClose";

// Contexts
import { AppContext } from "../../components/App";

function Modal({ children, show, large, title }) {
  // Transitions
  const transitions = useTransition(show, null, {
    from: { opacity: 0, transform: "translateY(4rem)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(4rem)" }
  });

  // Component
  return transitions.map(
    ({ item, props }) =>
      item && (
        <AppContext.Consumer>
          {({ closeModal }) => (
            <a.aside
              key="modal"
              style={props}
              className={cn("c-modal o-overlay", "o-layout -flex -middle", ["-large", large])}
              // onClick={closeModal}
            >
              <div className="c-modal_box o-layout_item">
                <header className="c-modal_header">
                  <h2 className="c-modal_title">{title}</h2>
                  <button type="button" className="c-modal_close-btn" onClick={closeModal}>
                    <CloseIcon className="c-modal_close-btn_icon" color="current" />
                  </button>
                </header>
                {children}
              </div>
            </a.aside>
          )}
        </AppContext.Consumer>
      )
  );
}

Modal.defaultProps = {
  title: "",
  large: false,
  show: false,
  children: null
};

Modal.propTypes = {
  large: PropTypes.bool,
  show: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};

export default Modal;
