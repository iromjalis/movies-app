import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './Reviews.styles';
//*components

class Reviews extends PureComponent {
  state = {};

  render() {
    return <div className="ReviewsWrapper">Reviews </div>;
  }
}

Reviews.propTypes = {
  // bla: PropTypes.string,
};

Reviews.defaultProps = {
  // bla: 'test',
};

export default Reviews;
