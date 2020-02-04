import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortNumericUpAlt,
  faSortNumericDownAlt,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

const IconMap = Object.freeze({
  SortNumericUpAlt: faSortNumericUpAlt,
  SortNumericDownAlt: faSortNumericDownAlt,
  ArrowLeft: faArrowLeft
});

export default class Icon extends React.Component {
  render() {
    const { icon, style, size } = this.props;
    return (
      <FontAwesomeIcon
        icon={IconMap[icon]}
        style={style}
        size={size}
      ></FontAwesomeIcon>
    );
  }
}
