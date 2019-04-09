/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";

// Components
import { InfoBubble } from "..";

function Label({ optional, htmlFor, text, infoContent, infoPreferPlace }) {
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
          preferPlace={infoPreferPlace}
        />
      )}
    </div>
  );
}

Label.defaultProps = {
  optional: false,
  infoContent: null,
  infoPreferPlace: "above"
};

Label.propTypes = {
  optional: PropTypes.bool,
  htmlFor: PropTypes.string.isRequired,
  infoPreferPlace: PropTypes.string,
  text: PropTypes.string.isRequired,
  infoContent: PropTypes.node
};

export default Label;
