import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import DropdownIcon from "react-ionicons/lib/MdArrowDropdown";

function CodeEditorQuickMenu({ files, activeFileIndex }) {
  const [isOpen, set] = useState(false);
  return (
    <div type="button" className="c-code-editor_quick-menu">
      <button
        type="button"
        className="c-code-editor_quick-menu_toggle-btn"
        onClick={() => set(!isOpen)}
      >
        <DropdownIcon className="c-code-editor_quick-menu_toggle-btn_icon" color="current" />
      </button>
    </div>
  );
}

CodeEditorQuickMenu.propTypes = {
  activeFileIndex: PropTypes.number.isRequired,
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

export default CodeEditorQuickMenu;
