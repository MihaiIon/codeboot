// ====================================================================================
// Component / Root / Core / Constants
// ====================================================================================

// Constant
import { APP__STATE, APP__ANIMATION_SPEED, APP__USER_MODE } from "../../App";
import {
  LAYOUT_MANAGER__LAYOUT_SETTING,
  LAYOUT_MANAGER__EDITOR_POSITION
} from "../../../modules/LayoutManager";

// App Helper Exports
// ====================================================================================

const {
  IDLE: APP_IDLE,
  EXECUTING_CODE: APP_EXECUTING_CODE,
  EXECUTING_CODE_WITH_STEPS: APP_EXECUTING_CODE_WITH_STEPS,
  EXECUTING_CODE_WITH_ANIMATIONS: APP_EXECUTING_CODE_WITH_ANIMATIONS,
  PAUSED_CODE_EXECUTION: APP_PAUSED_CODE_EXECUTION
} = APP__STATE;

const {
  SLOW: APP_ANIMATION_SLOW,
  NORMAL: APP_ANIMATION_NORMAL,
  FAST: APP_ANIMATION_FAST,
  TURBO: APP_ANIMATION_TURBO
} = APP__ANIMATION_SPEED;

const { NOVICE: APP_USER_NOVICE, STANDARD: APP_USER_STANDARD } = APP__USER_MODE;

export {
  APP_IDLE,
  APP_EXECUTING_CODE,
  APP_EXECUTING_CODE_WITH_STEPS,
  APP_EXECUTING_CODE_WITH_ANIMATIONS,
  APP_PAUSED_CODE_EXECUTION,
  APP_ANIMATION_SLOW,
  APP_ANIMATION_NORMAL,
  APP_ANIMATION_FAST,
  APP_ANIMATION_TURBO,
  APP_USER_NOVICE,
  APP_USER_STANDARD
};

// Layout Manager Helper Exports
// ====================================================================================

const {
  TOP: EDITOR_TOP,
  RIGHT: EDITOR_RIGHT,
  BOTTOM: EDITOR_BOTTOM,
  LEFT: EDITOR_LEFT
} = LAYOUT_MANAGER__EDITOR_POSITION;

const { EDITOR_ONLY, CONSOLE_ONLY, SPLIT: LAYOUT_SPLIT } = LAYOUT_MANAGER__LAYOUT_SETTING;

export {
  EDITOR_TOP,
  EDITOR_RIGHT,
  EDITOR_BOTTOM,
  EDITOR_LEFT,
  EDITOR_ONLY,
  CONSOLE_ONLY,
  LAYOUT_SPLIT
};
