import React from "react";

// Components
import Navigation from "./components/FooterNav";
import Item from "./components/FooterItem";

// Contexts
import { AppContext } from "../App";

// Constants
import { APP_SPLITTER_LAYOUT, APP_SPLITTER_EDITOR_POSITION } from "../App/core/constants";

// Helpers
import {
  isBoth,
  isConsole,
  isEditor,
  isEditorTop,
  isEditorRight,
  isEditorBottom,
  isEditorLeft
} from "../App/core/helpers";

// Helpers
// ====================================================================================

/**
 * Renders the navigation the manages the layout of the application.
 *
 * @param {Number} layout TODO
 * @param {Function} setLayout Sets the layout
 */
const renderLayoutNavigation = (layout, setLayout) => {
  return (
    <Navigation>
      <Item active={isBoth(layout)} action={() => setLayout(APP_SPLITTER_LAYOUT.BOTH)}>
        Split
      </Item>
      <Item active={isConsole(layout)} action={() => setLayout(APP_SPLITTER_LAYOUT.CONSOLE_ONLY)}>
        Console
      </Item>
      <Item active={isEditor(layout)} action={() => setLayout(APP_SPLITTER_LAYOUT.EDITOR_ONLY)}>
        Code Editor
      </Item>
    </Navigation>
  );
};

/**
 * Renders the navigation that manages the position of the code editor.
 *
 * @param {Number} setEditorPosition TODO
 * @param {Function} setSplitterEditorPosition Sets the editor position
 */
const renderEditorPositionNavigation = (editorPosition, setEditorPosition) => {
  return (
    <Navigation>
      <Item
        active={isEditorTop(editorPosition)}
        action={() => setEditorPosition(APP_SPLITTER_EDITOR_POSITION.TOP)}
      >
        Code Top
      </Item>
      <Item
        active={isEditorLeft(editorPosition)}
        action={() => setEditorPosition(APP_SPLITTER_EDITOR_POSITION.LEFT)}
      >
        Code Left
      </Item>
      <Item
        active={isEditorRight(editorPosition)}
        action={() => setEditorPosition(APP_SPLITTER_EDITOR_POSITION.RIGHT)}
      >
        Code Right
      </Item>
      <Item
        active={isEditorBottom(editorPosition)}
        action={() => setEditorPosition(APP_SPLITTER_EDITOR_POSITION.DOWN)}
      >
        Code Bottom
      </Item>
    </Navigation>
  );
};

// Footer
// ====================================================================================

function Footer() {
  return (
    <AppContext.Consumer>
      {({ splitter: { layout, editorPosition }, setLayout, setEditorPosition }) => (
        <footer className="c-footer o-wrapper">
          {renderLayoutNavigation(layout, setLayout)}
          {isBoth(layout) && renderEditorPositionNavigation(editorPosition, setEditorPosition)}
        </footer>
      )}
    </AppContext.Consumer>
  );
}

Footer.propTypes = {};

export default Footer;
