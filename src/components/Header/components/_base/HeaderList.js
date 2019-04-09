import React from "react";
import PropTypes from "prop-types";

function HeaderList({ children }) {
  return (
    <div className="o-layout_item">
      <ul className="c-header_list o-layout -middle">{children}</ul>
    </div>
  );
}

HeaderList.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderList;
