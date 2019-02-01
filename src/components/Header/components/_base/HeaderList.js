import React, { Component } from "react";
import PropTypes from "prop-types";

class HeaderList extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="o-layout_item">
        <ul className="c-header_list o-layout -middle">{children}</ul>
      </div>
    );
  }
}

HeaderList.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderList;
