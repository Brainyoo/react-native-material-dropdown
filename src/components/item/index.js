import React, { PureComponent } from "react";

import { Button } from "react-native-material-buttons";
import PropTypes from "prop-types";
import styles from "./styles";

export default class DropdownItem extends PureComponent {
  static defaultProps = {
    color: "transparent",
    disabledColor: "transparent",
    rippleContainerBorderRadius: 0,
    shadeBorderRadius: 0
  };

  static propTypes = {
    ...Button.propTypes,

    index: PropTypes.number.isRequired,
    testID: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    let { onPress, index } = this.props;

    if ("function" === typeof onPress) {
      onPress(index);
    }
  }

  render() {
    let { children, style, index, testID, ...props } = this.props;

    return (
      <Button
        {...props}
        testID={testID + "-" + index}
        style={[styles.container, style]}
        onPress={this.onPress}
      >
        {children}
      </Button>
    );
  }
}
