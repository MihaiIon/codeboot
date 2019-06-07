import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import CloseIcon from "react-ionicons/lib/MdClose";

class CodeEditorTab extends Component {
  render() {
    const { active, filename } = this.props;
    const { onClose, onClick } = this.props;
    return (
      <li className={`c-code-editor_tab${active ? " -active" : ""}`} onClick={onClick}>
        <span className="c-code-editor_tab_name">{filename}</span>
        <button className="c-code-editor_tab_close-btn" type="button" onClick={onClose}>
          <CloseIcon className="c-code-editor_tab_close-btn_icon" color="currentColor" />
        </button>
      </li>
    );
  }
}

CodeEditorTab.defaultProps = {
  active: false
};

CodeEditorTab.propTypes = {
  active: PropTypes.bool,
  filename: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CodeEditorTab;
