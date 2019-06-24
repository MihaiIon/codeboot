import React, { useContext, useState, useEffect } from "react";

// Components
import { Controlled as CodeMirror } from "react-codemirror2";
import Navigation from "./components/CodeEditorNavigation";

// Contexts
import { FileSystemContext } from "../Root";

// Constants
import { options, SAVE_INTERVAL } from "./core/constants";

function CodeEditor() {
  const {
    files,
    activeFileIndex,
    setActiveFileIndex,
    setFileValueById,
    getActiveFileValue,
    deleteFileById
  } = useContext(FileSystemContext);

  // Current value
  const [value, setValue] = useState(getActiveFileValue() || "");
  const [lastActiveFileIndex, setCurrentActiveFileIndex] = useState(activeFileIndex);

  useEffect(() => {
    if (lastActiveFileIndex !== activeFileIndex) {
      setCurrentActiveFileIndex(activeFileIndex);
      setValue(getActiveFileValue());
    }
  });

  // useEffect(() => {
  //   const interval = setInterval(() => setFileValueById(activeFileIndex, value), SAVE_INTERVAL);
  //   return () => clearInterval(interval);
  // });

  return (
    <section className="c-code-editor">
      <Navigation
        files={files}
        activeFileIndex={activeFileIndex}
        deleteFileById={deleteFileById}
        setActiveFileIndex={setActiveFileIndex}
      />
      {lastActiveFileIndex !== null && lastActiveFileIndex >= 0 ? (
        <CodeMirror
          className="c-code-editor_tool o-wrapper"
          value={value}
          options={{ ...options }}
          onBeforeChange={(editor, data, value) => {
            setValue(value);
          }}
          onChange={(editor, data, value) => null}
        />
      ) : (
        <div className="c-code-editor_no-editor">
          <p className="c-code-editor_no-editor_p">No file available</p>
        </div>
      )}
    </section>
  );
}

export default CodeEditor;
