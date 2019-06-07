import React, { useState, useContext } from "react";
import cn from "classnames-helper";

// Components
import { Spring, animated as a } from "react-spring/renderprops";
import CloseIcon from "react-ionicons/lib/MdClose";

// Contexts
import { AppContext } from "../components/App";

function Modal() {
  const [isVisible, setVisibility] = useState(false);
  const {
    modal: { show, title, content },
    hideModal
  } = useContext(AppContext);
  // Delay visibility
  if (!isVisible && show) {
    setVisibility(true);
  } else if (isVisible && !show) {
    setTimeout(() => {
      if (!show) setVisibility(false);
    }, 500);
  }
  return (
    <Spring
      from={{ opacity: 0, transform: "translateY(25%)", visibility: "hidden" }}
      to={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0%)" : "translateY(25%)",
        visibility: isVisible ? "visible" : "hidden"
      }}
    >
      {props => (
        <a.aside
          key="modal"
          style={props}
          className={cn("c-modal o-overlay", "o-layout -flex -middle")}
        >
          <div className="c-modal_box o-layout_item">
            <header className="c-modal_header">
              <h2 className="c-modal_title">{title}</h2>
              <button type="button" className="c-modal_close-btn" onClick={hideModal}>
                <CloseIcon className="c-modal_close-btn_icon" color="current" />
              </button>
            </header>
            <div id="js-modal" className="c-modal_body">
              {content}
            </div>
          </div>
        </a.aside>
      )}
    </Spring>
  );
}

export default Modal;
