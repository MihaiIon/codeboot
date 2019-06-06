// ====================================================================================
// Modules / Code Editor / Core / Context
// ====================================================================================

import React, { useState } from "react";

// Components
import FormCreateFile from "../../../forms/FormCreateFile";

// Contexts
import FileSystemContext, { File } from "./FileSystemContext";

// Constants
import { APP__STATE, APP__ANIMATION_SPEED, APP__USER_MODE } from "../core/constants";
import {
  LAYOUT_MANAGER__LAYOUT_SETTING,
  LAYOUT_MANAGER__EDITOR_POSITION
} from "../../../modules/LayoutManager";

const { EDITOR_ONLY, CONSOLE_ONLY, SPLIT: LAYOUT_SPLIT } = LAYOUT_MANAGER__LAYOUT_SETTING;

const {
  TOP: EDITOR_TOP,
  RIGHT: EDITOR_RIGHT,
  BOTTOM: EDITOR_BOTTOM,
  LEFT: EDITOR_LEFT
} = LAYOUT_MANAGER__EDITOR_POSITION;

// Context Value
// ====================================================================================

export function getAppContextValue() {
  // State
  // ------------------------------------------------------
  const [state, setAppState] = useState(APP__STATE.IDLE);
  // Settings
  // ------------------------------------------------------
  const [settings, setSettings] = useState({
    animationSpeed: APP__ANIMATION_SPEED.NORMAL,
    userMode: APP__USER_MODE.NOVICE,
    isDrawingWindow: false,
    isPixelGrid: false
  });
  // Overlay
  // ------------------------------------------------------
  const [isOverlay, setOverlayState] = useState(false);
  // Modal
  // ------------------------------------------------------
  const [modal, setModalState] = useState({
    title: null,
    content: null,
    isVisible: false
  });
  // Layout Manager
  // ------------------------------------------------------
  const [layoutManager, setLayoutManager] = useState({
    layout: LAYOUT_MANAGER__LAYOUT_SETTING.CONSOLE_ONLY,
    editorPosition: LAYOUT_MANAGER__EDITOR_POSITION.BOTTOM
  });
  // Console
  // ------------------------------------------------------
  const [consoleHistory, setConsoleHistory] = useState([]);

  return {
    // State
    // ------------------------------------------------------
    state,
    setAppStateToIdle: () => setAppState(APP__STATE.IDLE),
    setAppStateToExecutingCode: () => setAppState(APP__STATE.EXECUTING_CODE),
    setAppStateTopausedCodeExecution: () => setAppState(APP__STATE.PAUSED_CODE_EXECUTION),
    setAppStateToExecutingCodeWithSteps: () => setAppState(APP__STATE.EXECUTING_CODE_WITH_STEPS),
    setAppStateToExecutingCodeWithAnimations: () =>
      setAppState(APP__STATE.EXECUTING_CODE_WITH_ANIMATIONS),
    // Settings
    // ------------------------------------------------------
    settings,
    isUserNovice: () => settings.userMode === APP__USER_MODE.NOVICE,
    // Overlay
    // ------------------------------------------------------
    isOverlay,
    showOverlay: () => setOverlayState(true),
    hideOverlay: () => setOverlayState(false),
    // Modal
    // ------------------------------------------------------
    modal,
    hideModal: () => {
      setOverlayState(false);
      setModalState(currState => ({ ...currState, isVisible: false }));
    },
    showCreateFileModal: () => {
      setOverlayState(true);
      setModalState({
        isVisible: true,
        title: "create script",
        content: (
          <FileSystemContext.Consumer>
            {({ setFileSystem }) => (
              <FormCreateFile
                onSubmit={(filename, collaborators) => {
                  setFileSystem(({ files, length }) => {
                    const tmp = filename.split(".");
                    files.push(
                      new File(length, tmp[0], tmp[1], "", collaborators.split(", ").join("\n"))
                    );
                    return {
                      length: length + 1,
                      activeFileIndex: length,
                      files
                    };
                  });
                  setOverlayState(false);
                  setModalState(currState => ({ ...currState, isVisible: false }));
                  if (layoutManager.layout !== LAYOUT_SPLIT) {
                    setLayoutManager(({ editorPosition }) => ({
                      editorPosition,
                      layout: LAYOUT_SPLIT
                    }));
                  }
                }}
              />
            )}
          </FileSystemContext.Consumer>
        )
      });
    },

    // Layout Manager
    // ------------------------------------------------------
    layoutManager,
    isConsoleOnly: () => layoutManager.layout === CONSOLE_ONLY,
    isEditorOnly: () => layoutManager.layout === EDITOR_ONLY,
    isLayoutSplit: () => layoutManager.layout === LAYOUT_SPLIT,

    setLayoutToConsoleOnly: () =>
      setLayoutManager(({ editorPosition }) => ({ editorPosition, layout: CONSOLE_ONLY })),
    setLayoutToEditorOnly: () =>
      setLayoutManager(({ editorPosition }) => ({ editorPosition, layout: EDITOR_ONLY })),
    setLayoutToSplit: () =>
      setLayoutManager(({ editorPosition }) => ({ editorPosition, layout: LAYOUT_SPLIT })),

    isEditorTop: () => layoutManager.editorPosition === EDITOR_TOP,
    isEditorRight: () => layoutManager.editorPosition === EDITOR_RIGHT,
    isEditorBottom: () => layoutManager.editorPosition === EDITOR_BOTTOM,
    isEditorLeft: () => layoutManager.editorPosition === EDITOR_LEFT,

    setEditorToTop: () =>
      setLayoutManager(({ layout }) => ({ layout, editorPosition: EDITOR_TOP })),
    setEditorToRight: () =>
      setLayoutManager(({ layout }) => ({ layout, editorPosition: EDITOR_RIGHT })),
    setEditorToBottom: () =>
      setLayoutManager(({ layout }) => ({ layout, editorPosition: EDITOR_BOTTOM })),
    setEditorToLeft: () =>
      setLayoutManager(({ layout }) => ({ layout, editorPosition: EDITOR_LEFT })),
    // Console
    // ------------------------------------------------------
    consoleHistory,
    pushToConsoleHistory: value =>
      setConsoleHistory(history => {
        const tmp = history.length > 50 ? history.slice(25) : history;
        tmp.push(value);
        return tmp;
      })
  };
}

export default React.createContext();
