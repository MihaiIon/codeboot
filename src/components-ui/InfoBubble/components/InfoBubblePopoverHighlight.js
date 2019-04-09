import React from "react";
import PropTypes from "prop-types";

function InfoBubblePopoverHighlight({ children }) {
  return <span className="c-info-bubble-popover_highlight">{children}</span>;
}

InfoBubblePopoverHighlight.propTypes = {
  children: PropTypes.node.isRequired
};

export default InfoBubblePopoverHighlight;
