import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
//import { Test } from './HomeView.styles';

class HomeView extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    return <>HomeView </>;
  }
}

HomeView.propTypes = {
  // bla: PropTypes.string,
};

HomeView.defaultProps = {
  // bla: 'test',
};

export default HomeView;
