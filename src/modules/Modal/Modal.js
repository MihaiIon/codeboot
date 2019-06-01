import React from "react";
import cn from "classnames-helper";

// Components
import { Transition, animated as a } from "react-spring/renderprops";
import CloseIcon from "react-ionicons/lib/MdClose";

// Contexts
import { AppContext } from "../../components/App";

function Modal() {
  return (
    <AppContext.Consumer>
      {({ modal: { isVisible, isLarge, title, content }, hideModal }) => (
        <Transition
          items={isVisible}
          from={{ opacity: 0, transform: "translateY(25%)" }}
          leave={{ opacity: 0, transform: "translateY(25%)" }}
          enter={{ opacity: 1, transform: "translateY(0)" }}
        >
          {item => props =>
            item && (
              <a.aside
                key="modal"
                style={props}
                className={cn("c-modal o-overlay", "o-layout -flex -middle", ["-large", isLarge])}
                // onClick={closeModal}
              >
                <div className="c-modal_box o-layout_item">
                  <header className="c-modal_header">
                    <h2 className="c-modal_title">{title}</h2>
                    <button type="button" className="c-modal_close-btn" onClick={hideModal}>
                      <CloseIcon className="c-modal_close-btn_icon" color="current" />
                    </button>
                  </header>
                  {content}
                </div>
              </a.aside>
            )}
        </Transition>
      )}
    </AppContext.Consumer>
  );
}

export default Modal;
