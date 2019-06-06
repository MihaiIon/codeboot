import React, { Component } from "react";
import PropTypes from "prop-types";

// Component
import AddIcon from "react-ionicons/lib/MdAdd";
import Tab from "./_base/CodeEditorTab";

function CodeEditorNavigation({ files, activeFileIndex, createFile, deleteFileById }) {
  return (
    <nav className="c-code-editor_nav o-wrapper">
      {/* <div>File menu : TODO</div> */}
      <ul className="c-code-editor_tabs-list">
        {files.map((file, index) => (
          <Tab
            key={file.filename}
            filename={file.filename}
            active={activeFileIndex === index}
            onClick={() => null}
            onClose={() => null}
          />
        ))}
      </ul>
      <button className="c-code-editor_add-btn" type="button" onClick={() => null}>
        <AddIcon className="c-code-editor_add-btn_icon" color="currentColor" />
      </button>
    </nav>
  );
}

CodeEditorNavigation.propTypes = {
  activeFileIndex: PropTypes.number.isRequired,
  createFile: PropTypes.func.isRequired,
  deleteFileById: PropTypes.func.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      tabIndex: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      collaborators: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};

export default CodeEditorNavigation;
