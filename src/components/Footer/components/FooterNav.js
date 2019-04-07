import React from "react";
import PropTypes from "prop-types";

function FooterNav({ children }) {
  return (
    <nav className="c-footer_nav">
      <ul className="c-footer_list">{children}</ul>
    </nav>
  );
}

FooterNav.propTypes = {
  children: PropTypes.node.isRequired
};

export default FooterNav;
