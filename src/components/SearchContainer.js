import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchContainer extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div>
        <h2>SearchContainer</h2>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  users: PropTypes.array.isRequired
};

export default SearchContainer;
