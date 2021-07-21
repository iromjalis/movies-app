import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './SearchBar.styles';

class SearchBar extends PureComponent {
  state = {
    hasError: false,
  };

  render() {
    return <div className="SearchBarWrapper"></div>;
  }
}

SearchBar.propTypes = {
  // bla: PropTypes.string,
};

SearchBar.defaultProps = {
  // bla: 'test',
};

export default SearchBar;
