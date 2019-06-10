import React, { useState } from "react";
import PropTypes from "prop-types";

// Components
import FormCreateFile from "../../../forms/FormCreateFile";

// Objects
import { File } from "./FileSystemContextProvider";

// Contexts
import { AppProvider, FileSystemConsumer } from "..";

// Constants
import {
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
  APP_USER_STANDARD,
  EDITOR_TOP,
  EDITOR_RIGHT,
  EDITOR_BOTTOM,
  EDITOR_LEFT,
  EDITOR_ONLY,
  CONSOLE_ONLY,
  LAYOUT_SPLIT
} from "../core/constants";

// Export
// ====================================================================================

export default function AppProviderComponent({ children }) {
  // State
  // ------------------------------------------------------
  const [state, setAppState] = useState(APP_IDLE);
  const stateAccessMethods = {
    setAppStateToIdle: () => setAppState(APP_IDLE),
    setAppStateToExecutingCode: () => setAppState(APP_EXECUTING_CODE),
    setAppStateTopausedCodeExecution: () => setAppState(APP_PAUSED_CODE_EXECUTION),
    setAppStateToExecutingCodeWithSteps: () => setAppState(APP_EXECUTING_CODE_WITH_STEPS),
    setAppStateToExecutingCodeWithAnimations: () => setAppState(APP_EXECUTING_CODE_WITH_ANIMATIONS)
  };

  // Settings
  // ------------------------------------------------------
  const [settings, setSettings] = useState({
    animationSpeed: APP_ANIMATION_NORMAL,
    userMode: APP_USER_NOVICE,
    isDrawingWindow: false,
    isPixelGrid: false
  });
  const settingsAccessMethods = {
    isUserNovice: () => settings.userMode === APP_USER_NOVICE,
    isUserStandard: () => settings.userMode === APP_USER_STANDARD
  };

  // Overlay
  // ------------------------------------------------------
  const [isOverlay, setOverlayState] = useState(false);
  const overlayAccessMethods = {
    showOverlay: () => setOverlayState(true),
    hideOverlay: () => setOverlayState(false)
  };

  // Layout Manager
  // ------------------------------------------------------
  const [layoutManager, setLayoutManager] = useState({
    layout: CONSOLE_ONLY,
    editorPosition: EDITOR_BOTTOM
  });
  const layoutManagerAccessMethods = {
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
      setLayoutManager(({ layout }) => ({ layout, editorPosition: EDITOR_LEFT }))
  };

  // Modal
  // ------------------------------------------------------
  const [modal, setModalState] = useState({
    title: null,
    content: null,
    show: false
  });

  const showModalHelper = (title, content) => {
    setOverlayState(true);
    setModalState({
      show: true,
      title,
      content
    });
  };
  const hideModalHelper = () => {
    overlayAccessMethods.hideOverlay();
    setModalState(currState => ({ ...currState, show: false }));
  };

  const modalAccessMethods = {
    hideModal: () => hideModalHelper(),
    showCreateFileModal: () =>
      showModalHelper(
        "create script",
        <FileSystemConsumer>
          {({ setFileSystem }) => (
            <FormCreateFile
              onSubmit={(filename, collaborators) => {
                // Create file
                setFileSystem(({ files, length }) => {
                  const tmp = filename.split(".");
                  files.push(new File(length, tmp[0], tmp[1], "", collaborators.split(", ")));
                  return {
                    length: length + 1,
                    activeFileIndex: length,
                    files
                  };
                });
                // Close Modal
                hideModalHelper();

                // Update Layout
                if (layoutManager.layout === CONSOLE_ONLY) {
                  layoutManagerAccessMethods.setLayoutToSplit();
                }
              }}
            />
          )}
        </FileSystemConsumer>
      )
  };

  // Console
  // ------------------------------------------------------
  const [consoleHistory, setConsoleHistory] = useState([]);

  return (
    <AppProvider
      value={{
        // State
        state,
        ...stateAccessMethods,
        // Settings
        settings,
        ...settingsAccessMethods,
        // Overlay
        isOverlay,
        ...overlayAccessMethods,
        // Layout Manager
        layoutManager,
        ...layoutManagerAccessMethods,
        // Modal
        modal,
        ...modalAccessMethods,

        // Console
        // ------------------------------------------------------
        consoleHistory,
        pushToConsoleHistory: value =>
          setConsoleHistory(history => {
            const tmp = history.length > 50 ? history.slice(25) : history;
            tmp.push(value);
            return tmp;
          })
      }}
    >
      {children}
    </AppProvider>
  );
}

AppProviderComponent.propTypes = {
  children: PropTypes.node.isRequired
};
