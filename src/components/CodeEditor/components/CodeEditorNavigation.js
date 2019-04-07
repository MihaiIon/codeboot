import React, { Component } from "react";
import PropTypes from "prop-types";

// Component
import AddIcon from "react-ionicons/lib/MdAdd";
import CodeEditorTab from "./_base/CodeEditorTab";

class CodeEditorNav extends Component {
  render() {
    const { files } = this.props;
    const { addScript, removeScript, setTabActive } = this.props;
    return (
      <nav className="c-code-editor_nav o-wrapper">
        {/* <div>File menu : TODO</div> */}
        <ul className="c-code-editor_tabs-list">
          {/* {files.map(({ id, filename, isActive }) => (
            <CodeEditorTab
              key={`${id}-${filename}`}
              filename={filename}
              active={isActive}
              onClick={() => setTabActive(id)}
              onClose={() => removeScript(id)}
            />
          ))} */}
          <CodeEditorTab active filename="filename.js" />
          <CodeEditorTab filename="filename_2.js" />
        </ul>
        <button className="c-code-editor_add-btn" type="button" onClick={() => null}>
          <AddIcon className="c-code-editor_add-btn_icon" color="currentColor" />
        </button>
      </nav>
    );
  }
}

CodeEditorNav.propTypes = {
  scripts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  addScript: PropTypes.func.isRequired,
  removeScript: PropTypes.func.isRequired,
  closeTab: PropTypes.func.isRequired
};

export default CodeEditorNav;
