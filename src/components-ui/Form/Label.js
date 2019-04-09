/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";

// Components
import InfoBubble from "../InfoBubble";

function Label({ optional, htmlFor, text, infoContent }) {
  return (
    <div>
      <label className="o-label" htmlFor={htmlFor}>
        {text}
      </label>
      {optional && <span className="o-label_optional">( optional )</span>}
      {infoContent && <InfoBubble content={infoContent} />}
    </div>
  );
}

Label.defaultProps = {
  optional: false,
  infoContent: null
};

Label.propTypes = {
  optional: PropTypes.bool,
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  infoContent: PropTypes.node
};

export default Label;
