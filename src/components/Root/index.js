import React from "react";

export { default } from "./Root";

// Contexts
export const AppContext = React.createContext();
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

export const FileSystemContext = React.createContext();
export const FileSystemProvider = FileSystemContext.Provider;
export const FileSystemConsumer = FileSystemContext.Consumer;
