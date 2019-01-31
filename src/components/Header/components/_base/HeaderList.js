import React, { Component } from "react";
import PropTypes from "prop-types";

class HeaderList extends Component {
  render() {
    const { children } = this.props;
    return <ul className="c-header_list o-layout -middle">{children}</ul>;
  }
}

HeaderList.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderList;
