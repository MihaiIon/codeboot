/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";

// Components
import InfoBubble from "../InfoBubble";

function Label({ optional, htmlFor, text, infoContent, infoPreferedPlace }) {
  return (
    <div className="o-label-wrapper">
      <label className="o-label" htmlFor={htmlFor}>
        {text}
      </label>
      {optional && <span className="o-label_optional">- optional</span>}
      {infoContent && (
        <InfoBubble
          className="o-label_info-bubble"
          content={infoContent}
          preferPlace={infoPreferedPlace}
        />
      )}
    </div>
  );
}

Label.defaultProps = {
  optional: false,
  infoContent: null,
  infoPreferedPlace: "above"
};

Label.propTypes = {
  optional: PropTypes.bool,
  htmlFor: PropTypes.string.isRequired,
  infoPreferedPlace: PropTypes.string,
  text: PropTypes.string.isRequired,
  infoContent: PropTypes.node
};

export default Label;
