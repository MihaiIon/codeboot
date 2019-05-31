// ====================================================================================
// Modules / Code Editor / Core / Context
// ====================================================================================

import React from "react";

// File Class
// ====================================================================================

class File {
  /**
   *
   * @param {*} tabIndex Position in the files array
   * @param {*} name
   * @param {*} extension
   * @param {*} collaborators
   * @param {*} content
   */
  constructor(tabIndex, name, extension, content, collaborators) {
    this.tabIndex = tabIndex;
    this.name = name;
    this.extension = extension;
    this.content = content;
    this.collaborators = collaborators;
  }

  get filename() {
    return `${this.name}.${this.extension}`;
  }
}

// File System Context
// ====================================================================================

const value = {
  length: 0,
  loadedFile: null,
  files: [],

  /**
   * Removes the file with the specified 'id' from the file system. This will also
   * remove the tab associated with that file.
   *
   * @param {Number} id Id of the file to be deleted (removed from codeBoot).
   */
  deleteFileById(id) {
    const { files, length } = this;
    // Check if id is inbounds
    if (id < 0 || id >= length) {
      throw new Error(`FileSystemContext | User tried to delete the file with id '${id}'.`);
    }

    // Reorder tabs
    this.files.forEach(file => {
      if (file.tabIndex > this.files[id].tabIndex) {
        file.tabIndex -= 1;
      }
    });

    // Remove file
    if (id === 0) this.files.shift();
    else if (id === length - 1) this.files.pop();
    else this.files = files.slice(0, id - 1).concat(files.slice(id));

    // Adjust length.
    this.length -= 1;
  },

  /**
   * Create a file and add it the the file system (also creates a tab).
   *
   * @param {String} name File name
   * @param {String} extension File extension
   * @param {[String]} collaborators Array for collaborators names
   */
  createFile(name, extension, collaborators = []) {
    this.files.push(
      new File(
        this.length,
        name,
        extension,
        collaborators.reduce((content, collaborator) => `${content}// ${collaborator}\n`, ""),
        collaborators
      )
    );
    this.length += 1;
  },

  /**
   * TODO.
   */
  loadfilesFromLocalStorage() {}
};

export default React.createContext(value);
