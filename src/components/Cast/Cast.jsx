import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './Cast.styles';

class Cast extends PureComponent {
  state = {
    hasError: false,
  };

  render() {
    return <div className="CastWrapper">Cast </div>;
  }
}

Cast.propTypes = {
  // bla: PropTypes.string,
};

Cast.defaultProps = {
  // bla: 'test',
};

export default Cast;
