import React, { Component } from "react";
import PropTypes from "prop-types";

// Import constants
import { DEFAULT_DELAY_BEFORE_ANIMATION, DEFAULT_DELAY_BEFORE_UNMOUNT } from "../constants/time";

class AnimatedComponent extends Component {
  constructor(props) {
    super(props);
    const { mount } = props;
    this.state = {
      animate: false,
      isMounted: mount
    };
  }

  // -----------------------------------------------------------
  // Life Cycles

  componentDidMount() {
    this.animateComponent();
  }

  componentDidUpdate() {
    this.animateComponent();
    // const { delay, noDelay } = this.props;
    // setTimeout(
    //   () => {
    //     this.setState({ animate: true });
    //   },
    //   noDelay ? 0.01 : delay
    // );
  }

  // -----------------------------------------------------------
  // Methods

  getComponentModifiers() {
    const { mount } = this.props;
    const { animate, isMounted } = this.state;
    const { fadeInUp, fadeInDown, fadeInLeft, fadeInRight } = this.props;
    const { fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight } = this.props;

    // Animation state
    let modifiers = mount && isMounted ? " -show" : " -hide";
    modifiers += mount && animate ? " -animate" : "";

    // Fade In
    if (fadeInUp) {
      modifiers += " -fade-in-up";
    } else if (fadeInDown) {
      modifiers += " -fade-in-down";
    } else if (fadeInLeft) {
      modifiers += " -fade-in-left";
    } else if (fadeInRight) {
      modifiers += " -fade-in-right";
    }

    // Fade Out
    if (fadeOutUp) {
      modifiers += " -fade-out-up";
    } else if (fadeOutDown) {
      modifiers += " -fade-out-down";
    } else if (fadeOutLeft) {
      modifiers += " -fade-out-left";
    } else if (fadeOutRight) {
      modifiers += " -fade-out-right";
    }

    return modifiers;
  }

  animateComponent() {
    const { animate, isMounted } = this.state;
    const { delayBeforeAnimation, delayBeforeUnmount, mount } = this.props;
    if (!isMounted && mount) {
      this.setState({ isMounted: true });
    } else if (isMounted && !animate) {
      setTimeout(() => this.setState({ animate: true }), delayBeforeAnimation);
    } else if (animate && !mount) {
      this.setState({ animate: false });
      setTimeout(() => this.setState({ isMounted: false }), delayBeforeUnmount);
    }
  }

  // -----------------------------------------------------------
  // Render

  render() {
    const { isMounted } = this.state;
    const { wrapper, className, customProps, children } = this.props;
    return isMounted
      ? React.createElement(
          wrapper,
          {
            className: `${className} o-animated${this.getComponentModifiers()}`,
            ...customProps
          },
          children
        )
      : null;
  }
}

AnimatedComponent.defaultProps = {
  mount: true,

  fadeInUp: false,
  fadeInDown: false,
  fadeInLeft: false,
  fadeInRight: false,

  fadeOutUp: false,
  fadeOutDown: false,
  fadeOutLeft: false,
  fadeOutRight: false,

  delayBeforeAnimation: DEFAULT_DELAY_BEFORE_ANIMATION,
  delayBeforeUnmount: DEFAULT_DELAY_BEFORE_UNMOUNT,

  className: "",
  wrapper: "div",
  children: null,
  customProps: {}
};

AnimatedComponent.propTypes = {
  mount: PropTypes.bool,

  fadeInUp: PropTypes.bool,
  fadeInDown: PropTypes.bool,
  fadeInLeft: PropTypes.bool,
  fadeInRight: PropTypes.bool,

  fadeOutUp: PropTypes.bool,
  fadeOutDown: PropTypes.bool,
  fadeOutLeft: PropTypes.bool,
  fadeOutRight: PropTypes.bool,

  delayBeforeAnimation: PropTypes.number,
  delayBeforeUnmount: PropTypes.number,
  className: PropTypes.string,
  wrapper: PropTypes.string,
  children: PropTypes.node,
  customProps: PropTypes.shape({})
};

export default AnimatedComponent;
