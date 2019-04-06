import React, { useState, useContext } from "react";

// Import components
import Footer from "../Footer";
import Header from "../Header";
import { Overlay } from "../../components-ui";
import Splitter from "../Splitter";

function App() {
  return (
    <div id="js-app" className="c-app">
      <Header />
      <main>
        <Splitter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
