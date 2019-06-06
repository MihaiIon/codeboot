// ====================================================================================
// Modules / Code Editor / Core / Context
// ====================================================================================

import React, { useState } from "react";

// File Class
// ====================================================================================

export class File {
  /**
   * TODO
   * @param {Number} tabIndex Position in the files array
   * @param {String} name File's name
   * @param {String} extension File's extension
   * @param {String} value
   * @param {[String]} collaborators Array of collaborators names
   */
  constructor(tabIndex, name, extension, collaborators, value) {
    this.tabIndex = tabIndex;
    this.name = name;
    this.extension = extension;
    this.collaborators = collaborators;
    if (value.length === 0) {
      this.value =
        collaborators.length === 0 ? "" : collaborators.map(str => `\\/\\/ ${str}`).join("\n");
    } else {
      this.value = value;
    }
  }

  get filename() {
    return `${this.name}.${this.extension}`;
  }
}

// File System Context
// ====================================================================================

export function getFileSystemContextValue() {
  const [fileSystem, setFileSystem] = useState({
    length: 0,
    activeFileIndex: -1,
    files: []
  });

  return {
    ...fileSystem,
    setFileSystem,
    /**
     * Removes the file with the specified 'id' from the file system. This will also
     * remove the tab associated with that file.
     *
     * @param {Number} id Id of the file to be deleted (removed from codeBoot).
     */
    deleteFileById(id) {
      let { files, length, activeFileIndex } = fileSystem;
      // Check if id is inbounds
      if (id < 0 || id >= length) {
        throw new Error(`FileSystemContext | User tried to delete the file with id '${id}'.`);
      }

      // Reorder tabs
      files.forEach(file => {
        if (file.tabIndex > files[id].tabIndex) {
          file.tabIndex -= 1;
        }
      });

      // Fix loaded file
      if (activeFileIndex === length - 1 || activeFileIndex > id) {
        activeFileIndex -= 1;
      }

      // Remove file
      if (id === 0) files.shift();
      else if (id === length - 1) files.pop();
      else files = files.slice(0, id - 1).concat(files.slice(id));

      // Adjust length & Update
      length -= 1;
      setFileSystem({ files, length, activeFileIndex });
    },

    /**
     * TODO.
     */
    loadfilesFromLocalStorage() {},

    /**
     *
     */
    getActiveFileValue() {
      const { files, activeFileIndex } = fileSystem;
      return activeFileIndex < 0 ? null : files[activeFileIndex].value;
    }
  };
}

export default React.createContext();
