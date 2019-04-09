import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

function HeaderItem({ children, transparent, onClick }) {
  return (
    <li className="c-header_item o-layout_item">
      <button
        type="button"
        className={cn("c-header_btn", ["-transparent", transparent])}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}

HeaderItem.defaultProps = {
  transparent: false
};

HeaderItem.propTypes = {
  transparent: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default HeaderItem;
