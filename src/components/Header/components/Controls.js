import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import Item from "./_base/HeaderItem";

class Control extends Component {
  // ------------------------------------------------------
  // Methods

  getSVGPath() {
    const { pause, playWithSteps, step, stop } = this.props;
    const path = "./assets/";
    if (stop) return `${path}cb_stop.svg`;
    if (step) return `${path}cb_step.svg`;
    if (pause) return `${path}cb_pause.svg`;
    if (playWithSteps) return `${path}cb_play-step.svg`;
    return `${path}cb_play.svg`;
  }

  // ------------------------------------------------------
  // Render
  render() {
    return (
      <Item>
        <img src={this.getSVGPath()} alt="play" />
      </Item>
    );
  }
}

Control.defaultProps = {
  pause: false,
  // play: true,
  playWithSteps: false,
  stop: false,
  step: false
};

Control.propTypes = {
  pause: PropTypes.bool,
  // play: PropTypes.bool,
  playWithSteps: PropTypes.bool,
  stop: PropTypes.bool,
  step: PropTypes.bool
};

export default Control;
