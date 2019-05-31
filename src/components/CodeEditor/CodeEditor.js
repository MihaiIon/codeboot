import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import { Controlled as CodeMirror } from "react-codemirror2";
import Navigation from "./components/CodeEditorNavigation";

// Constants
import defaultOptions from "./core/options";

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  // ------------------------------------------------------
  // Methods

  onBeforeChange(editor, data, value) {
    this.setState({ value });
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { value } = this.state;
    return (
      <section className="c-code-editor">
        <Navigation />
        <CodeMirror
          className="c-code-editor_tool o-wrapper"
          value={value}
          options={{ ...defaultOptions }}
          onBeforeChange={(e, d, v) => this.onBeforeChange(e, d, v)}
          onChange={(e, d, v) => {}}
        />
      </section>
    );
  }
}

CodeEditor.propTypes = {};

export default CodeEditor;
