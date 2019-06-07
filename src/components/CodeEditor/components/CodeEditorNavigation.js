import React from "react";
import PropTypes from "prop-types";

// Component
import Tab from "./CodeEditorTab";
import QuickMenu from "./CodeEditorQuickMenu";
import CreateFileButton from "./CodeEditorCreateFileButton";

function CodeEditorNavigation({ files, activeFileIndex, deleteFileById, setActiveFileIndex }) {
  return (
    <nav className="c-code-editor_nav">
      <QuickMenu files={files} activeFileIndex={activeFileIndex} />
      <ul className="c-code-editor_tabs-list">
        {files.map((file, index) => (
          <Tab
            key={`tab--${file.filename}--index-${index}`}
            filename={file.filename}
            active={activeFileIndex === index}
            onClick={() => setActiveFileIndex(index)}
            onClose={() => deleteFileById(index)}
          />
        ))}
      </ul>
      <CreateFileButton />
    </nav>
  );
}

CodeEditorNavigation.propTypes = {
  activeFileIndex: PropTypes.number.isRequired,
  createFile: PropTypes.func.isRequired,
  deleteFileById: PropTypes.func.isRequired,
  setActiveFileIndex: PropTypes.func.isRequired,
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
