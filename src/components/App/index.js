import React, { useState } from "react";

// Import components
import Footer from "../Footer";
import Header from "../Header";
import { Modal, Overlay, Splitter } from "../../components-ui";

// Constants
import initialState from "./core/constants";
import { SPEED } from "../../constants/time";

export const AppContext = React.createContext();

function App() {
  const [state, setAppState] = useState(initialState.state);
  const [isOverlay, setOverlayVisibility] = useState(initialState.isOverlay);
  const [settings, setSettings] = useState(initialState.settings);
  const [splitter, setSplitter] = useState(initialState.splitter);
  const [modal, setModal] = useState(initialState.modal);
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
      <div id="js-app" className="c-app">
        <Header />
        <main>
          <button type="button" onClick={() => ctx.openModalAndSetContent("Tester")}>
            Open modal test
          </button>
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
