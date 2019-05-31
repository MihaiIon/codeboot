import React, { useState } from "react";
import cn from "classnames-helper";

// Components
// import Header from "../Header";
// import Footer from "../Footer";
import Overlay from "./components/Overlay";

// Modules
// import LayoutManager from "../../modules/LayoutManager";
// import Modal from "../../modules/Modal";

// Contexts
import AppContext, { appContextValue } from "./contexts/AppContext";
import { FileSystemContext } from ".";

// Helpers
import { isNovice } from "./core/helpers";

function App() {
  return (
    <AppContext.Consumer>
      {({ settings, modal, isOverlay }) => (
        <div id="js-app" className={cn("c-app", ["t-novice", isNovice(settings.userMode)])}>
          {/* <Header /> */}
          {/* <main>
            <LayoutManager />
          </main> */}
          {/* <Footer /> */}
          {/* <Modal show={modal.isVisible} title={modal.title}>
            {modal.content}
          </Modal> */}
          <Overlay isOverlay={isOverlay} />
        </div>
      )}
    </AppContext.Consumer>
  );
}

function Root() {
  return (
    <AppContext.Provider value={appContextValue}>
      <FileSystemContext.Provider>
        <App />
      </FileSystemContext.Provider>
    </AppContext.Provider>
  );
}

export default Root;
