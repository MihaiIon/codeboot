import React, { Fragment } from "react";
import cn from "classnames-helper";

// Components
import Header from "../Header";
import Footer from "../Footer";
import Overlay from "./components/Overlay";

// Modules
import Modal from "../../modules/Modal";
import LayoutManager from "../../modules/LayoutManager";

// Contexts
import AppContext, { getAppContextValue } from "./contexts/AppContext";
import FileSystemContext, { getFileSystemContextValue } from "./contexts/FileSystemContext";

function App() {
  return (
    <AppContext.Consumer>
      {({ isOverlay, isUserNovice }) => (
        <div id="js-app" className={cn("c-app", ["t-novice", isUserNovice()])}>
          <Header />
          <main>
            <LayoutManager />
          </main>
          <Footer />
          <Overlay show={isOverlay} />
          <Modal />
        </div>
      )}
    </AppContext.Consumer>
  );
}

function Root() {
  return (
    <AppContext.Provider value={getAppContextValue()}>
      <FileSystemContext.Provider value={getFileSystemContextValue()}>
        <App />
      </FileSystemContext.Provider>
    </AppContext.Provider>
  );
}

export default Root;
