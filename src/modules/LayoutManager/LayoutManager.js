import React, { useState } from "react";
import cn from "classnames-helper";

// Components
import Handle from "./components/LayoutManagerHandle";
import View from "./components/LayoutManagerView";
import CodeEditor from "../../components/CodeEditor";
import Console from "../../components/Console";

// Contexts
import { AppConsumer } from "../../components/Root";

function LayoutManager() {
  const [handlePosition, setHandlePosition] = useState(0.5);

  return (
    <AppConsumer>
      {({
        isEditorOnly,
        isConsoleOnly,
        isLayoutSplit,
        isEditorTop,
        isEditorBottom,
        isEditorLeft
      }) => {
        const isTop = isEditorTop();
        const isBottom = isEditorBottom();
        const isLeft = isEditorLeft();

        const isSplit = isLayoutSplit();
        const isHorizontal = isSplit && (isTop || isBottom);

        const isConsole = isConsoleOnly();
        const isEditor = isEditorOnly();

        return (
          <div
            id="js-layout-manager"
            className={cn(
              "c-layout-manager",
              ["-split", isSplit],
              ["-horizontal", "-vertical", isHorizontal]
            )}
          >
            <Handle
              isHorizontal={isHorizontal}
              position={handlePosition}
              setPosition={setHandlePosition}
            />
            <View
              only={isConsole}
              show={isSplit || isConsole}
              index={isTop || isLeft ? 1 : 0}
              isHorizontal={isHorizontal}
              handlePosition={handlePosition}
            >
              <Console />
            </View>
            <View
              only={isEditor}
              show={isSplit || isEditor}
              index={isTop || isLeft ? 0 : 1}
              isHorizontal={isHorizontal}
              handlePosition={handlePosition}
            >
              <CodeEditor />
            </View>
          </div>
        );
      }}
    </AppConsumer>
  );
}

export default LayoutManager;
