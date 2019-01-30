// =====================================================
// Actions / App
// =====================================================

// Import constants
import { APP_STATUS } from "../components/App/core/constants";

// Import actions
import { APP_ACTION_TYPES } from "./actions";

// Loading
// ======================================================

export const showLoading = () => ({
  type: APP_ACTION_TYPES.SHOW_LOADING
});

export const hideLoading = () => ({
  type: APP_ACTION_TYPES.HIDE_LOADING
});

// Close all navigations/menus
// ======================================================

export const closeNavigationsAndMenus = () => ({
  type: APP_ACTION_TYPES.CLOSE_NAVIGATIONS_AND_MENUS
});

// Judicial Entity ID
// =====================================================
export const receiveJudicialEntityId = judicialEntityId => ({
  type: APP_ACTION_TYPES.RECEIVE_JUDICIAL_ENTITY,
  judicialEntityId
});

// Auto Representative Public ID
// =====================================================
export const receiveAutoRepPublicId = autoRepPublicId => ({
  type: APP_ACTION_TYPES.RECEIVE_AUTOREP_PUBLIC_ID,
  autoRepPublicId
});

// Application Initialization
// =====================================================

export const initializeApplicationCancelled = () => ({
  type: APP_ACTION_TYPES.INITIALIZE_APPLICATION_CANCELLED
});

export const startApplication = () => ({
  type: APP_ACTION_TYPES.START_APPLICATION,
  status: APP_STATUS.STARTING
});

export const applicationStarted = () => ({
  type: APP_ACTION_TYPES.APPLICATION_STARTED,
  status: APP_STATUS.STARTED
});

// Load Application
// =====================================================

export const applicationLoaded = () => ({
  type: APP_ACTION_TYPES.APPLICATION_LOADED,
  status: APP_STATUS.IDLE
});

export const setIsReady = value => ({
  isReady: value
});

// Unload Application
// =====================================================

export const unloadApplication = () => ({
  type: APP_ACTION_TYPES.UNLOAD_APPLICATION
});
