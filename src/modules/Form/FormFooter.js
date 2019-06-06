import React from "react";
import PropTypes from "prop-types";

function FormFooter({ children }) {
  return <div className="o-form_footer">{children}</div>;
}

FormFooter.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormFooter;
