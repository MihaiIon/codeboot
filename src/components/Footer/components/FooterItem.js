import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

function FooterItem({ children, action, active }) {
  return (
    <li className="c-footer_item">
      <button type="button" onClick={action} className={cn("c-footer_btn", ["-active", active])}>
        {children}
      </button>
    </li>
  );
}

FooterItem.defaultProps = {
  active: false
};

FooterItem.propTypes = {
  active: PropTypes.bool,
  action: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default FooterItem;
