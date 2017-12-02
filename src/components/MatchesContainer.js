import React from "react";
import PropTypes from "prop-types";

const MatchesContainer = props => (
  <div>
    <h2>MatchesContainer</h2>
  </div>
);

MatchesContainer.propTypes = {
  user: PropTypes.object.isRequired, // need user passed down to see only users of the gender they like
  users: PropTypes.array.isRequired
};
export default MatchesContainer;
