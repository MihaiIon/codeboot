import React from "react";

// Components
import App from "../App";
import AppContextProvider from "./components/AppContextProvider";
import FileSystemContextProvider from "./components/FileSystemContextProvider";

function Root() {
  return (
    <AppContextProvider>
      <FileSystemContextProvider>
        <App />
      </FileSystemContextProvider>
    </AppContextProvider>
  );
}

export default Root;
