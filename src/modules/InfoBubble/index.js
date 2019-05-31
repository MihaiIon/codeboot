import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

// Components
import Popover from "react-popover";
import InfoIcon from "react-ionicons/lib/MdHelpCircle";

function InfoBubble({ className, preferPlace, content }) {
  const [isPopover, setPopoverVisibility] = useState(false);
  return (
    <Popover
      className="c-info-bubble-popover"
      isOpen={isPopover}
      body={content}
      preferPlace={preferPlace}
      tipSize={10}
    >
      <div
        className="c-info-bubble"
        onMouseEnter={() => setPopoverVisibility(true)}
        onMouseLeave={() => setPopoverVisibility(false)}
      >
        <InfoIcon className={cn("c-info-bubble_icon", className)} color="current" />
      </div>
    </Popover>
  );
}

InfoBubble.defaultProps = {
  className: "",
  preferPlace: "above"
};

InfoBubble.propTypes = {
  className: PropTypes.string,
  preferPlace: PropTypes.string,
  content: PropTypes.node.isRequired
};

export default InfoBubble;
