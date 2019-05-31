// ====================================================================================
// Components / App / Core / Helpers
// ====================================================================================

import { APP__USER_MODE } from "..";
import {
  LAYOUT_MANAGER__LAYOUT_SETTING,
  LAYOUT_MANAGER__EDITOR_POSITION
} from "../../../modules/LayoutManager";

// User Mode
// ====================================================================================

export const isNovice = userMode => userMode === APP__USER_MODE.NOVICE;

// Layout
// ====================================================================================

export const isBoth = layout => layout === LAYOUT_MANAGER__LAYOUT_SETTING.BOTH;
export const isConsole = layout => layout === LAYOUT_MANAGER__LAYOUT_SETTING.CONSOLE_ONLY;
export const isEditor = layout => layout === LAYOUT_MANAGER__LAYOUT_SETTING.EDITOR_ONLY;

// Editor
// ====================================================================================

export const isEditorTop = p => p === LAYOUT_MANAGER__EDITOR_POSITION.TOP;
export const isEditorRight = p => p === LAYOUT_MANAGER__EDITOR_POSITION.RIGHT;
export const isEditorBottom = p => p === LAYOUT_MANAGER__EDITOR_POSITION.DOWN;
export const isEditorLeft = p => p === LAYOUT_MANAGER__EDITOR_POSITION.LEFT;
