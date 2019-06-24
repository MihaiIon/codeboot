import React from "react";
import PropTypes from "prop-types";

// Components
import Navigation from "./_base/FooterNav";
import Item from "./_base/FooterItem";

function FooterEditorPositionNavigation({
  isLayoutSplit,
  isEditorTop,
  isEditorRight,
  isEditorBottom,
  isEditorLeft,
  setEditorToTop,
  setEditorToRight,
  setEditorToBottom,
  setEditorToLeft
}) {
  return (
    isLayoutSplit() && (
      <Navigation>
        <Item active={isEditorTop()} action={() => setEditorToTop()}>
          Code Top
        </Item>
        <Item active={isEditorBottom()} action={() => setEditorToBottom()}>
          Code Bottom
        </Item>
        <Item active={isEditorLeft()} action={() => setEditorToLeft()}>
          Code Left
        </Item>
        <Item active={isEditorRight()} action={() => setEditorToRight()}>
          Code Right
        </Item>
      </Navigation>
    )
  );
}

FooterEditorPositionNavigation.propTypes = {
  isLayoutSplit: PropTypes.func.isRequired,
  isEditorTop: PropTypes.func.isRequired,
  isEditorRight: PropTypes.func.isRequired,
  isEditorBottom: PropTypes.func.isRequired,
  isEditorLeft: PropTypes.func.isRequired,
  setEditorToTop: PropTypes.func.isRequired,
  setEditorToRight: PropTypes.func.isRequired,
  setEditorToBottom: PropTypes.func.isRequired,
  setEditorToLeft: PropTypes.func.isRequired
};

export default FooterEditorPositionNavigation;
