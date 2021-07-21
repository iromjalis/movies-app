import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './SearchBar.styles';

class SearchBar extends PureComponent {
  state = {
    hasError: false,
  };

  render() {
    return (
      <div className="SearchBarWrapper">
        <form>
          <label htmlFor="">
            <input type="text" placeholder="Найтите любой фильм" />
          </label>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  // bla: PropTypes.string,
};

SearchBar.defaultProps = {
  // bla: 'test',
};

export default SearchBar;
