import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class Navigation extends PureComponent {
  state = {
    hasError: false,
  };
  linkStyles = {
    base: {
      color: "black",
    },
    active: {
      color: "blue",
    },
  };

  render() {
    const { base, active } = this.linkStyles;
    return (
      <div className="NavigationWrapper">
        <ul className="NavigationList">
          <li className="Navigation-item">
            <NavLink exact to="/" style={base} activeStyle={active}>
              𝓗𝓸𝓶𝓮
            </NavLink>
          </li>
          {/* <li className="Navigation-item">
            <NavLink to="/authors" style={base} activeStyle={active}>
              Authors
            </NavLink>
          </li>
          <li className="Navigation-item">
            <NavLink to="/books" style={base} activeStyle={active}>
              Books
            </NavLink>
          </li> */}
          <li className="Navigation-item">
            <NavLink to="/movies" style={base} activeStyle={active}>
              𝓜𝓸𝓿𝓲𝓮𝓼
            </NavLink>
          </li>
          <li className="Navigation-item">
            <NavLink to="/movies/:id" style={base} activeStyle={active}>
              𝓜𝓸𝓿𝓲𝓮
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  // bla: PropTypes.string,
};

Navigation.defaultProps = {
  // bla: 'test',
};

export default Navigation;
