// ====================================================================================
// Modules / Code Editor / Core / Context
// ====================================================================================

import React from "react";

// Constants
import { APP__STATE, APP__ANIMATION_SPEED, APP__USER_MODE } from "../core/constants";

import {
  LAYOUT_MANAGER__LAYOUT_SETTING,
  LAYOUT_MANAGER__EDITOR_POSITION
} from "../../../modules/LayoutManager";

// Initial State
// ====================================================================================

export const appContextValue = {
  // State
  // ------------------------------------------------------
  state: APP__STATE.IDLE,
  setState(newState) {
    this.state = newState;
  },
  // Overlay
  // ------------------------------------------------------
  isOverlay: false,
  showOverlay() {
    this.overlay = true;
  },
  hideOverlay() {
    this.overlay = false;
  },
  // Modal
  // ------------------------------------------------------
  modal: {
    title: null,
    content: null,
    isVisible: false
  },
  // Console
  // ------------------------------------------------------
  console: {
    output: [],
    history: []
  },
  // Layout Manager
  // ------------------------------------------------------
  layoutManager: {
    layout: LAYOUT_MANAGER__LAYOUT_SETTING.CONSOLE_ONLY,
    editorPosition: LAYOUT_MANAGER__EDITOR_POSITION.DOWN
  },
  // Settings
  // ------------------------------------------------------
  settings: {
    animationSpeed: APP__ANIMATION_SPEED.NORMAL,
    userMode: APP__USER_MODE.NOVICE,
    isDrawingWindow: false,
    isPixelGrid: false
  }
};

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
