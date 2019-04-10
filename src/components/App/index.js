import React, { useState } from "react";
import cn from "classnames-helper";

// Import components
import Footer from "../Footer";
import Header from "../Header";
import { Modal, Overlay, Splitter } from "../../components-ui";

// Helpers
import { isNovice } from "./core/helpers";

// Constants
import initialState from "./core/constants";
import { SPEED } from "../../constants/time";

export const AppContext = React.createContext();

function App() {
  // States
  const [state, setAppState] = useState(initialState.state);
  const [isOverlay, setOverlayVisibility] = useState(initialState.isOverlay);
  const [isModal, setModalVisibility] = useState(false);
  const [modal, setModal] = useState(initialState.modal);
  const [consoleHistory, setConsoleHistory] = useState(initialState.console.history);
  const [consoleOutput, setConsoleOutput] = useState(initialState.console.output);
  const [settings, setSettings] = useState(initialState.settings);
  const [splitter, setSplitter] = useState(initialState.splitter);

  // Context
  const ctx = {
    consoleHistory,
    consoleOutput,
    state,
    splitter,
    settings,
    // Settings
    setState: newState => setAppState(newState),
    setAnimationSpeed: speed => setSettings({ ...settings, animationSpeed: speed }),
    setDrawingWindowVisibility: bool => setSettings({ ...settings, showDrawingWindow: bool }),
    setPixelGridVisibility: bool => setSettings({ ...settings, showPixelGrid: bool }),
    // Console
    pushToConsoleHistory: value => {
      consoleHistory.push(value);
      setConsoleHistory(consoleHistory);
    },
    pushToConsoleOutput: value => null,
    // Splitter
    setUserMode: mode => setSettings({ ...settings, userMode: mode }),
    setLayout: layout => setSplitter({ ...splitter, layout }),
    setEditorPosition: p => setSplitter({ ...splitter, editorPosition: p }),
    // Modal
    closeModal: () => {
      setOverlayVisibility(false);
      setModalVisibility(false);
    },
    openModalAndSetContent: (title = "", content) => {
      setOverlayVisibility(true);
      setModalVisibility(true);
      setModal({ title, content });
    },
    // Overlay
    setOverlayVisibility
  };

  return (
    <AppContext.Provider value={ctx}>
      <div id="js-app" className={cn("c-app", ["t-novice", isNovice(settings.userMode)])}>
        <Header />
        <main>
          <Splitter />
        </main>
        <Footer />
        <Overlay isOverlay={isOverlay} />
        <Modal show={isModal} title={modal.title}>
          {modal.content}
        </Modal>
      </div>
    </AppContext.Provider>
  );
}

export default App;
