// ====================================================================================
// Components / App / Core / Helpers
// ====================================================================================

import { APP_SPLITTER_LAYOUT, APP_SPLITTER_EDITOR_POSITION } from "./constants";

// Layout
// ====================================================================================

export const isBoth = layout => layout === APP_SPLITTER_LAYOUT.BOTH;
export const isConsole = layout => layout === APP_SPLITTER_LAYOUT.CONSOLE_ONLY;
export const isEditor = layout => layout === APP_SPLITTER_LAYOUT.EDITOR_ONLY;

// Editor
// ====================================================================================

export const isEditorTop = p => p === APP_SPLITTER_EDITOR_POSITION.TOP;
export const isEditorRight = p => p === APP_SPLITTER_EDITOR_POSITION.RIGHT;
export const isEditorBottom = p => p === APP_SPLITTER_EDITOR_POSITION.DOWN;
export const isEditorLeft = p => p === APP_SPLITTER_EDITOR_POSITION.LEFT;
