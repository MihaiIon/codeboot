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
  const [settings, setSettings] = useState(initialState.settings);
  const [splitter, setSplitter] = useState(initialState.splitter);
  const [modal, setModal] = useState(initialState.modal);
  // Context
  const ctx = {
    state,
    splitter,
    settings,
    setState: newState => setAppState(newState),
    setAnimationSpeed: speed => setSettings({ ...settings, animationSpeed: speed }),
    setDrawingWindowVisibility: bool => setSettings({ ...settings, showDrawingWindow: bool }),
    setPixelGridVisibility: bool => setSettings({ ...settings, showPixelGrid: bool }),
    setUserMode: mode => setSettings({ ...settings, userMode: mode }),
    setLayout: layout => setSplitter({ ...splitter, layout }),
    setEditorPosition: p => setSplitter({ ...splitter, editorPosition: p }),
    closeModal: () => {
      setOverlayVisibility(false);
      setModal({ ...modal, isVisible: false });
      setTimeout(() => setModal({ content: null, isVisible: false }), SPEED);
    },
    openModalAndSetContent: content => {
      setOverlayVisibility(true);
      setModal({ isVisible: true, content });
    },
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
        <Modal show={modal.isVisible}>{modal.content}</Modal>
      </div>
    </AppContext.Provider>
  );
}

export default App;
