import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

function HeaderNav({ children, linked }) {
  return (
    <nav className={cn("c-header_nav", "o-layout -flex -middle", ["-linked", linked])}>
      {children}
    </nav>
  );
}

HeaderNav.defaultProps = {
  linked: false
};

HeaderNav.propTypes = {
  linked: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default HeaderNav;
