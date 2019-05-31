import React, { useState } from "react";
import cn from "classnames-helper";

// Components
import LayoutHandle from "./components/SplitterHandle";
import LyaoutView from "./components/SplitterView";
import CodeEditor from "../../components/CodeEditor";
import Console from "../../components/Console";

// Contexts
import { AppContext } from "../../components/App";

// Constants
import { LAYOUT_MANAGER__LAYOUT_SETTING } from ".";

// Splitter
// ====================================================================================

function LayoutManager() {
  const [handlePosition, setHandlePosition] = useState(0.5);
  return (
    <AppContext.Consumer>
      {({ layoutManager: { layout }, isEditorTop, isEditorBottom, isEditorLeft }) => {
        const isHorizontal = isEditorTop() || isEditorBottom();
        const isEditorFirst = isEditorTop() || isEditorLeft();
        switch (layout) {
          case LAYOUT_MANAGER__LAYOUT_SETTING.CONSOLE_ONLY:
            return <Console />;
          case LAYOUT_MANAGER__LAYOUT_SETTING.EDITOR_ONLY:
            return <CodeEditor />;
          default:
            return (
              <div
                id="js-layout-manager"
                className={cn("c-layout-manager", ["-horizontal", "-vertical", isHorizontal])}
              >
                <LayoutHandle
                  isHorizontal={isHorizontal}
                  position={handlePosition}
                  setPosition={setHandlePosition}
                />
                <LyaoutView index={0} isHorizontal={isHorizontal} handlePosition={handlePosition}>
                  {isEditorFirst ? <CodeEditor /> : <Console />}
                </LyaoutView>
                <LyaoutView index={1} isHorizontal={isHorizontal} handlePosition={handlePosition}>
                  {!isEditorFirst ? <CodeEditor /> : <Console />}
                </LyaoutView>
              </div>
            );
        }
      }}
    </AppContext.Consumer>
  );
}

export default LayoutManager;
