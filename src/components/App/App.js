import React from "react";
import cn from "classnames-helper";

// Components
import Header from "../Header";
import Footer from "../Footer";
import Overlay from "./components/Overlay";

// Modules
// import LayoutManager from "../../modules/LayoutManager";
import Modal from "../../modules/Modal";

// Contexts
import AppContext, { getAppContextValue } from "./contexts/AppContext";
import { FileSystemContext } from ".";

function App() {
  return (
    <AppContext.Consumer>
      {({ modal, isOverlay, isUserNovice }) => (
        <div id="js-app" className={cn("c-app", ["t-novice", isUserNovice()])}>
          <Header />
          <main>{/* <LayoutManager /> */}</main>
          <Footer />
          <Modal />
          <Overlay show={isOverlay} />
        </div>
      )}
    </AppContext.Consumer>
  );
}

function Root() {
  return (
    <AppContext.Provider value={getAppContextValue()}>
      <FileSystemContext.Provider>
        <App />
      </FileSystemContext.Provider>
    </AppContext.Provider>
  );
}

export default Root;
