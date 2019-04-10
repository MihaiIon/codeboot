// =====================================================
// Components / App / Core / Constants
// =====================================================

export const APP_STATE = {
  IDLE: 0,
  EXECUTING_CODE: 1,
  EXECUTING_CODE_WITH_STEPS: 2,
  EXECUTING_CODE_WITH_ANIMATIONS: 3,
  PAUSED_CODE_EXECUTION: 4
};

export const APP_SPLITTER_LAYOUT = {
  CONSOLE_ONLY: 0,
  EDITOR_ONLY: 1,
  BOTH: 2
};

export const APP_SPLITTER_EDITOR_POSITION = {
  TOP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3
};

export const APP_ANIMATION_SPEED = {
  SLOW: 1,
  NORMAL: 2,
  FAST: 3,
  TURBO: 4
};

export const APP_USER_MODE = {
  NOVICE: 0,
  STANDARD: 1
};

// Initial State
// ====================================================================================

export default {
  state: APP_STATE.IDLE,
  isOverlay: false,
  modal: {
    title: null,
    content: null
  },
  console: {
    output: [],
    history: []
  },
  splitter: {
    layout: APP_SPLITTER_LAYOUT.CONSOLE_ONLY,
    editorPosition: APP_SPLITTER_EDITOR_POSITION.DOWN
  },
  settings: {
    animationSpeed: APP_ANIMATION_SPEED.NORMAL,
    userMode: APP_USER_MODE.NOVICE,
    isDrawingWindow: false,
    isPixelGrid: false
  }
};
