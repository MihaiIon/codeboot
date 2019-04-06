import React, { Component } from "react";
import PropTypes from "prop-types";

// Helpers
import classNamesHelper from "classnames-helper";

// Components
import Navigation from "./components/FooterNav";
import Item from "./components/FooterItem";

class Footer extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { tmp } = this.props;
    return classNamesHelper("c-footer", "o-wrapper", ["-tmp", tmp]);
  }

  // ------------------------------------------------------
  // Render

  renderSplitOptionsNavigation() {
    const { isSplit, isCodeEditor } = this.props;
    const { showAll, showOnlyConsole, showOnlyCodeEditor } = this.props;
    return (
      <Navigation>
        <Item active={isSplit} action={showAll}>
          Split
        </Item>
        <Item active={!isSplit && !isCodeEditor} action={showOnlyConsole}>
          Console
        </Item>
        <Item active={!isSplit && isCodeEditor} action={showOnlyCodeEditor}>
          Code Editor
        </Item>
      </Navigation>
    );
  }

  renderLayoutNavigation() {
    const { isCodeEditorTop, isCodeEditorRight, isCodeEditorBottom, isCodeEditorLeft } = this.props;
    const {
      setCodeEditorTop,
      setCodeEditorRight,
      setCodeEditorBottom,
      setCodeEditorLeft
    } = this.props;
    return (
      <Navigation>
        <Item active={isCodeEditorTop} action={setCodeEditorTop}>
          Code Top
        </Item>
        <Item active={isCodeEditorLeft} action={setCodeEditorLeft}>
          Code Left
        </Item>
        <Item active={isCodeEditorRight} action={setCodeEditorRight}>
          Code Right
        </Item>
        <Item active={isCodeEditorBottom} action={setCodeEditorBottom}>
          Code Bottom
        </Item>
      </Navigation>
    );
  }

  render() {
    const { isSplit } = this.props;
    return (
      <div wrapper="footer" className={this.getComponentClassNames()}>
        {this.renderSplitOptionsNavigation()}
        {isSplit && this.renderLayoutNavigation()}
      </div>
    );
  }
}

Footer.propTypes = {
  isCodeEditorTop: PropTypes.bool.isRequired,
  isCodeEditorRight: PropTypes.bool.isRequired,
  isCodeEditorBottom: PropTypes.bool.isRequired,
  isCodeEditorLeft: PropTypes.bool.isRequired,
  isSplit: PropTypes.bool.isRequired,
  isCodeEditor: PropTypes.bool.isRequired,
  setCodeEditorTop: PropTypes.func.isRequired,
  setCodeEditorRight: PropTypes.func.isRequired,
  setCodeEditorBottom: PropTypes.func.isRequired,
  setCodeEditorLeft: PropTypes.func.isRequired,
  showAll: PropTypes.func.isRequired,
  showOnlyConsole: PropTypes.func.isRequired,
  showOnlyCodeEditor: PropTypes.func.isRequired
};

export default Footer;
