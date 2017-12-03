import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Card, Image } from "semantic-ui-react";
import PersonInterestsCard from "./PersonInterestsCard";
import SearchFilter from "./SearchFilter";

class SearchContainer extends Component {
  state = {
    isMatchOnly: false
  };
  cards = () => {
    return this.props.users.map(user => {
      return (
        <PersonInterestsCard
          key={user.id}
          data={user}
          getGenderIcon={this.props.getGenderIcon}
        />
      );
    });
  };

  render() {
    console.log(this.props.users);
    return (
      <div>
        <h2>Search</h2>
        <SearchFilter interests={this.props.interests} />
        <Card.Group>{this.cards()}</Card.Group>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  interests: PropTypes.array.isRequired
};

export default SearchContainer;
