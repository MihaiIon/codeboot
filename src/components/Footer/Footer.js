import React from "react";

// Components
import FooterLayoutNavigation from "./components/FooterLayoutNavigation";

// Contexts
import { AppContext } from "../App";
import FooterEditorPositionNavigation from "./components/FooterEditorPositionNavigation";

// Footer
// ====================================================================================

function Footer() {
  return (
    <AppContext.Consumer>
      {({
        isEditorOnly,
        isConsoleOnly,
        isLayoutSplit,
        setLayoutToEditorOnly,
        setLayoutToConsoleOnly,
        setLayoutToSplit,

        isEditorTop,
        isEditorRight,
        isEditorBottom,
        isEditorLeft,
        setEditorToTop,
        setEditorToRight,
        setEditorToBottom,
        setEditorToLeft
      }) => (
        <footer className="c-footer o-wrapper">
          <FooterLayoutNavigation
            isEditorOnly={isEditorOnly}
            isConsoleOnly={isConsoleOnly}
            isLayoutSplit={isLayoutSplit}
            setLayoutToEditorOnly={setLayoutToEditorOnly}
            setLayoutToConsoleOnly={setLayoutToConsoleOnly}
            setLayoutToSplit={setLayoutToSplit}
          />
          <FooterEditorPositionNavigation
            isLayoutSplit={isLayoutSplit}
            isEditorTop={isEditorTop}
            isEditorRight={isEditorRight}
            isEditorBottom={isEditorBottom}
            isEditorLeft={isEditorLeft}
            setEditorToTop={setEditorToTop}
            setEditorToRight={setEditorToRight}
            setEditorToBottom={setEditorToBottom}
            setEditorToLeft={setEditorToLeft}
          />
        </footer>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
