import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import Item from "./_base/HeaderItem";

class NewFile extends Component {
  render() {
    return (
      <Item transparent>
        <img src="./assets/file.svg" alt="Add new script" />
      </Item>
    );
  }
}

NewFile.propTypes = {};

export default NewFile;
