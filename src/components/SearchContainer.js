import React from "react";
import PropTypes from "prop-types";

const SearchContainer = props => (
  <div>
    <h2>SearchContainer</h2>
  </div>
);

SearchContainer.propTypes = {
  users: PropTypes.array.isRequired
};

export default SearchContainer;
