// ====================================================================================
// Modules / Code Editor / Core / Context
// ====================================================================================

import React, { useState } from "react";

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
    // Overlay
    // ------------------------------------------------------
    isOverlay,
    showOverlay: () => setOverlayState(true),
    hideOverlay: () => setOverlayState(false),
    // Modal
    // ------------------------------------------------------
    modal,
    showModal: (title, content) => setModalState({ isVisible: true, title, content }),
    hideModal: () => setModalState(currState => ({ ...currState, isVisible: false })),
    // Modal
    // ------------------------------------------------------

    console: {
      output: [],
      history: []
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
    // Settings
    // ------------------------------------------------------
    settings: {
      animationSpeed: APP__ANIMATION_SPEED.NORMAL,
      userMode: APP__USER_MODE.NOVICE,
      isDrawingWindow: false,
      isPixelGrid: false
    }
  };

  // Console
  // ------------------------------------------------------
  //   console: {
  //     output: [],
  //     history: []
  //   },

  //   // Settings
  //   // ------------------------------------------------------
  //   settings: {
  //     animationSpeed: APP__ANIMATION_SPEED.NORMAL,
  //     userMode: APP__USER_MODE.NOVICE,
  //     isDrawingWindow: false,
  //     isPixelGrid: false
  //   }
  // };
}

export default React.createContext();

// // States
// const [isOverlay, setOverlayVisibility] = useState(initialState.isOverlay);
// const [isModal, setModalVisibility] = useState(false);
// const [modal, setModal] = useState(initialState.modal);
// const [consoleHistory, setConsoleHistory] = useState(initialState.console.history);
// const [consoleOutput, setConsoleOutput] = useState(initialState.console.output);
// const [settings, setSettings] = useState(initialState.settings);
// const [splitter, setSplitter] = useState(initialState.splitter);

// // Context
// const ctx = {
//   consoleHistory,
//   consoleOutput,
//   splitter,
//   settings,
//   // Settings
//   setAnimationSpeed: speed => setSettings({ ...settings, animationSpeed: speed }),
//   setDrawingWindowVisibility: bool => setSettings({ ...settings, showDrawingWindow: bool }),
//   setPixelGridVisibility: bool => setSettings({ ...settings, showPixelGrid: bool }),
//   // Console
//   pushToConsoleHistory: value => {
//     consoleHistory.push(value);
//     setConsoleHistory(consoleHistory);
//   },
//   pushToConsoleOutput: value => null,
//   // Splitter
//   setUserMode: mode => setSettings({ ...settings, userMode: mode }),
//   setLayout: layout => setSplitter({ ...splitter, layout }),
//   setEditorPosition: p => setSplitter({ ...splitter, editorPosition: p }),
//   // Modal
//   closeModal: () => {
//     setOverlayVisibility(false);
//     setModalVisibility(false);
//   },
//   openModalAndSetContent: (title = "", content) => {
//     setOverlayVisibility(true);
//     setModalVisibility(true);
//     setModal({ title, content });
//   },
// };
