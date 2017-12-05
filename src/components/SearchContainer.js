import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import PersonInterestsCard from "./PersonInterestsCard";
import SearchFilter from "./SearchFilter";
import { createLike } from "./Adapter";

class SearchContainer extends Component {
  state = {
    isMatchOnly: false,
    searchTerm: ""
  };

  cards = () => {
    if (!this.state.isMatchOnly) {
      return this.searchInterests();
    } else {
      return this.renderCheckboxFilteredUsers();
    }
  };

  searchInterests = () => {
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
            handleUserLike={this.handleUserLike}
          />
        );
      }
    });
  };

  // For each one of the signed in User's interests, look through all users and return all users who share an interest
  checkboxFilteredUsers = () => {
    let filtered = [];
    const user = this.props.user;
    const users = this.props.users;
    user.interests.forEach(interest => {
      users.forEach(user => {
        user.interests.forEach(userInterest => {
          if (userInterest.id === interest.id) {
            filtered.push(user);
          }
        });
      });
    });
    return filtered;
  };

  renderCheckboxFilteredUsers = () => {
    const users = this.checkboxFilteredUsers();
    return users.map(user => {
      return (
        <PersonInterestsCard
          key={user.id}
          data={user}
          getGenderIcon={this.props.getGenderIcon}
          handleUserLike={this.handleUserLike}
        />
      );
    });
  };

  toggleMatchOnly = () => {
    this.setState({
      isMatchOnly: !this.state.isMatchOnly
    });
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleUserLike = data => {
    const userId = this.props.user.id;
    data = { ...data, currentUserId: userId };
    //debugger;
    createLike(data);
  };

  render() {
    console.log("SearchContainer.props.USER is:", this.props.user);
    console.log("SearchContainer.props.USERS is:", this.props.users);
    return (
      <div>
        <h2>Search</h2>
        <SearchFilter
          interests={this.props.interests}
          handleChange={this.handleChange}
          //handleDropdown={this.setInterestsFilter}
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
