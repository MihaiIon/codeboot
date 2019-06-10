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
import { AppConsumer } from "../Root";

function App() {
  return (
    <AppConsumer>
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
    </AppConsumer>
  );
}

export default App;
