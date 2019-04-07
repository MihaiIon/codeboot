import React, { useState } from "react";

// Import components
import Footer from "../Footer";
import Header from "../Header";
import { Overlay, Splitter } from "../../components-ui";

// Core
import initialState from "./core/constants";

export const AppContext = React.createContext();

function App() {
  const [state, setAppState] = useState(initialState.state);
  const [isOverlay, setOverlayVisibility] = useState(initialState.isOverlay);
  const [settings, setSettings] = useState(initialState.settings);
  const [splitter, setSplitter] = useState(initialState.splitter);
  const ctx = {
    state,
    splitter,
    settings,
    setState: newState => setAppState(newState),
    setAnimationSpeed: speed => setSettings({ ...settings, animationSpeed: speed }),
    setDrawingWindowVisibility: bool => setSettings({ ...settings, showDrawingWindow: bool }),
    setPixelGridVisibility: bool => setSettings({ ...settings, showPixelGrid: bool }),
    setLayout: layout => setSplitter({ ...splitter, layout }),
    setEditorPosition: p => setSplitter({ ...splitter, editorPosition: p }),
    setUserMode: mode => setSettings({ ...settings, userMode: mode }),
    setOverlayVisibility
  };

  return (
    <AppContext.Provider value={ctx}>
      <div id="js-app" className="c-app">
        <Header />
        <main>
          <Splitter />
        </main>
        <Footer />
        <Overlay isOverlay={isOverlay} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
