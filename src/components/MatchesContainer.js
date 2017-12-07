import React, { Component } from "react";
import PropTypes from "prop-types";
import MatchPhotoCard from "./MatchPhotoCard";
import { fetchMatches } from "./Adapter";

class MatchesContainer extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    fetchMatches(this.props.user).then(data =>
      this.setState({
        matches: data
      })
    );
  }

  matches = () => {
    console.log("matches state is", this.state);
    // debugger;
    return this.state.matches.map(user => {
      return (
        <MatchPhotoCard
          key={user.id}
          data={user}
          getGenderIcon={this.props.getGenderIcon}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Match</h2>
        {this.matches()}
      </div>
    );
  }
}

MatchesContainer.propTypes = {
  user: PropTypes.object.isRequired, // need user passed down to see only users of the gender they like
  users: PropTypes.array.isRequired
};
export default MatchesContainer;
