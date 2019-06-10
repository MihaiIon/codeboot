import React from "react";

// Components
import LayoutNavigation from "./components/FooterLayoutNavigation";
import EditorPositionNavigation from "./components/FooterEditorPositionNavigation";

// Contexts
import { AppConsumer } from "../Root";

// Footer
// ====================================================================================

function Footer() {
  return (
    <AppConsumer>
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
          <LayoutNavigation
            isEditorOnly={isEditorOnly}
            isConsoleOnly={isConsoleOnly}
            isLayoutSplit={isLayoutSplit}
            setLayoutToEditorOnly={setLayoutToEditorOnly}
            setLayoutToConsoleOnly={setLayoutToConsoleOnly}
            setLayoutToSplit={setLayoutToSplit}
          />
          <EditorPositionNavigation
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
    </AppConsumer>
  );
}

export default Footer;
