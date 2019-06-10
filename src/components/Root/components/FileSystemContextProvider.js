import React, { useState } from "react";
import PropTypes from "prop-types";

// Contexts
import { FileSystemProvider } from "..";

// File Object
// ====================================================================================

export class File {
  /**
   * File Constructor.
   *
   * @param {Number} tabIndex Position in the files array
   * @param {String} name File's name
   * @param {String} extension File's extension
   * @param {String} value
   * @param {[String]} collaborators Array of collaborators names
   */
  constructor(tabIndex, name, extension, value, collaborators) {
    this.tabIndex = tabIndex;
    this.name = name;
    this.extension = extension;
    this.collaborators = collaborators;
    if (value.length === 0) {
      this.value =
        collaborators.length === 0 || (collaborators.length === 1 && collaborators[0].length === 0)
          ? ""
          : collaborators.map((str, index) => `// Collaborator ${index + 1}: ${str}`).join("\n");
    } else {
      this.value = value;
    }
  }

  get filename() {
    return `${this.name}.${this.extension}`;
  }
}

// Component Export
// ====================================================================================

export default function FileSystemContextProvider({ children }) {
  const [fileSystem, setFileSystem] = useState({
    length: 0,
    activeFileIndex: -1,
    files: []
  });

  // ------------------------------------------------------

  const fileSystemAccessMethods = {
    /**
     * Provides the `value` of the loaded file (into the `CodeEditor`). If there is
     * no file available, the value `null` is returned.
     */
    getActiveFileValue: () => {
      const { files, activeFileIndex } = fileSystem;
      return activeFileIndex < 0 ? null : files[activeFileIndex].value;
    },

    /**
     * Updates the `value` of the file with the specified `id`.
     * TODO
     *
     * @param {Number} id Id of the file that needs to be updated.
     */
    setFileValueById: id => {},

    /**
     * Bring the file with the specified `id` into the `CodeEditor` (corresponding tab is also set active).
     *
     * @param {Number} id Id of the file that requires focus.
     */
    setActiveFileIndex: id =>
      setFileSystem(({ files, length }) => ({
        files,
        length,
        activeFileIndex: id >= length ? length - 1 : id
      })),

    /**
     * Removes the file with the specified `id` from the `FileSystemContext`. This will also
     * remove the tab associated with the removed file.
     *
     * @param {Number} id Id of the file to be deleted (removed from codeBoot).
     */
    deleteFileById: id => {
      let { files } = fileSystem;
      const { length: len } = fileSystem;

      // Check if id is inbounds
      if (id < 0 || id >= len) {
        throw new Error(`FileSystemContext | User tried to delete the file with id '${id}'.`);
      }

      // Reorder tabs
      files.forEach(file => {
        if (file.tabIndex > files[id].tabIndex) {
          file.tabIndex -= 1;
        }
      });

      // Remove file
      if (id === 0) files.shift();
      else if (id === len - 1) files.pop();
      else files = files.slice(0, id - 1).concat(files.slice(id));

      // Adjust length & Update
      setFileSystem(({ length, activeFileIndex }) => ({
        files,
        length: length - 1,
        activeFileIndex:
          activeFileIndex === length - 1 || activeFileIndex > id
            ? activeFileIndex - 1
            : activeFileIndex
      }));
    },

    /**
     * TODO.
     */
    loadFilesFromLocalStorage: () => {}
  };

  // ------------------------------------------------------

  return (
    <FileSystemProvider
      value={{
        setFileSystem,
        ...fileSystem,
        ...fileSystemAccessMethods
      }}
    >
      {children}
    </FileSystemProvider>
  );
}

FileSystemContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
