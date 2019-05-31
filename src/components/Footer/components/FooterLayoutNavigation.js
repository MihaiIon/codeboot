import React from "react";
import PropTypes from "prop-types";

// Components
import Navigation from "./_base/FooterNav";
import Item from "./_base/FooterItem";

function FooterLayoutNavigation({
  isEditorOnly,
  isConsoleOnly,
  isLayoutSplit,
  setLayoutToEditorOnly,
  setLayoutToConsoleOnly,
  setLayoutToSplit
}) {
  return (
    <Navigation>
      <Item active={isConsoleOnly()} action={() => setLayoutToConsoleOnly()}>
        Console
      </Item>
      <Item active={isEditorOnly()} action={() => setLayoutToEditorOnly()}>
        Code Editor
      </Item>
      <Item active={isLayoutSplit()} action={() => setLayoutToSplit()}>
        Split
      </Item>
    </Navigation>
  );
}

FooterLayoutNavigation.propTypes = {
  isEditorOnly: PropTypes.func.isRequired,
  isConsoleOnly: PropTypes.func.isRequired,
  isLayoutSplit: PropTypes.func.isRequired,
  setLayoutToConsoleOnly: PropTypes.func.isRequired,
  setLayoutToEditorOnly: PropTypes.func.isRequired,
  setLayoutToSplit: PropTypes.func.isRequired
};

export default FooterLayoutNavigation;
