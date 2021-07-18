import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
//import { Test } from './NotFound.styles';

class NotFound extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    return <div className="NotFound">404 - page not found &#x2639;</div>;
  }
}

NotFound.propTypes = {
  // bla: PropTypes.string,
};

NotFound.defaultProps = {
  // bla: 'test',
};

export default NotFound;
