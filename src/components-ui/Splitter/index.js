import React, { useState } from "react";
import cn from "classnames-helper";

// Components
import SplitterHandle from "./components/SplitterHandle";
import SplitterView from "./components/SplitterView";
import CodeEditor from "../../components/CodeEditor";
import Console from "../../components/Console";

// Contexts
import { AppContext } from "../../components/App";

// Helpers
import { isEditorTop, isEditorBottom, isEditorLeft } from "../../components/App/core/helpers";

// Constants
import { APP_SPLITTER_LAYOUT } from "../../components/App/core/constants";

// Splitter
// ====================================================================================

function Splitter() {
  const [handlePosition, setHandlePosition] = useState(0.5);
  return (
    <AppContext.Consumer>
      {({ splitter: { layout, editorPosition } }) => {
        const isHorizontal = isEditorTop(editorPosition) || isEditorBottom(editorPosition);
        const isEditorFirst = isEditorTop(editorPosition) || isEditorLeft(editorPosition);
        switch (layout) {
          case APP_SPLITTER_LAYOUT.CONSOLE_ONLY:
            return <Console />;
          case APP_SPLITTER_LAYOUT.EDITOR_ONLY:
            return <CodeEditor />;
          default:
            return (
              <div
                id="js-splitter"
                className={cn("c-splitter", ["-horizontal", "-vertical", isHorizontal])}
              >
                <SplitterHandle
                  isHorizontal={isHorizontal}
                  position={handlePosition}
                  setPosition={setHandlePosition}
                />
                <SplitterView index={0} isHorizontal={isHorizontal} handlePosition={handlePosition}>
                  {isEditorFirst ? <CodeEditor /> : <Console />}
                </SplitterView>
                <SplitterView index={1} isHorizontal={isHorizontal} handlePosition={handlePosition}>
                  {!isEditorFirst ? <CodeEditor /> : <Console />}
                </SplitterView>
              </div>
            );
        }
      }}
    </AppContext.Consumer>
  );
}

export default Splitter;
