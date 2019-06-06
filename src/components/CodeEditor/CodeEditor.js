import React, { Component } from "react";

// Components
import { Controlled as CodeMirror } from "react-codemirror2";
import Navigation from "./components/CodeEditorNavigation";

import { FileSystemContext } from "../App";

// Constants
import defaultOptions from "./core/options";

function CodeEditor() {
  return (
    <FileSystemContext.Consumer>
      {({ files, activeFileIndex, createFile, deleteFileById, getActiveFileValue }) => (
        <section className="c-code-editor">
          <Navigation
            files={files}
            activeFileIndex={activeFileIndex}
            createFile={createFile}
            deleteFileById={deleteFileById}
          />
          <CodeMirror
            className="c-code-editor_tool o-wrapper"
            value={getActiveFileValue()}
            options={{ ...defaultOptions }}
            onBeforeChange={(e, d, v) => null}
            onChange={(e, d, v) => null}
          />
        </section>
      )}
    </FileSystemContext.Consumer>
  );
}

export default CodeEditor;
