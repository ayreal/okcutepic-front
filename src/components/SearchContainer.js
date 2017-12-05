import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import PersonInterestsCard from "./PersonInterestsCard";
import SearchFilter from "./SearchFilter";

class SearchContainer extends Component {
  state = {
    isMatchOnly: false,
    searchTerm: ""
  };

  cards = () => {
    return this.props.users.map(user => {
      const userI = user.interests
        .map(interest => {
          return interest.name;
        })
        .join(",");

      console.log(userI);
      if (userI.includes(this.state.searchTerm.toLowerCase())) {
        return (
          <PersonInterestsCard
            key={user.id}
            data={user}
            getGenderIcon={this.props.getGenderIcon}
          />
        );
      }
    });
  };

  //
  // setInterestsFilter = event => {
  //   debugger;
  // };

  toggleMatchOnly = () => {
    this.setState({
      isMatchOnly: !this.state.isMatchOnly
    });
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  // filteredCards = () => {
  //   debugger;
  //   this.props.interests.filter(interest => {
  //     return interest.name.toLowerCase() === this.state.searchTerm;
  //   });
  // };

  render() {
    console.log("SearchContainer.props.USER is:", this.props.user);
    console.log("SearchContainer.props.USERS is:", this.props.users);
    return (
      <div>
        <h2>Search</h2>
        <SearchFilter
          interests={this.props.interests}
          handleChange={this.handleChange}
          handleDropdown={this.setInterestsFilter}
          handleCheckbox={this.toggleMatchOnly}
          isChecked={this.state.isMatchOnly}
          searchTerm={this.state.searchTerm}
        />
        <Card.Group>{this.cards()}</Card.Group>
      </div>
    );
  }
}

SearchContainer.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  interests: PropTypes.array.isRequired,
  getGenderIcon: PropTypes.func.isRequired
};

export default SearchContainer;
