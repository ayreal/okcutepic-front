import React, { Component } from "react";
import PersonPhotoCard from "./PersonPhotoCard";
import PropTypes from "prop-types";

class SwipeContainer extends Component {
  state = {
    currentPerson: {},
    isLiked: false
  };

  // clicking a heart will send a post request to create a like --> this comes down from params of the USER
  // clicking a thumb will call this.setCurrentPerson

  componentDidMount() {
    this.setCurrentPerson();
  }

  getRandomPerson() {
    const users = this.props.users;
    const user = this.props.user;
    let person = users[Math.floor(Math.random() * users.length)];
    // user can not get themself as a match
    while (person.id === user.id) {
      person = users[Math.floor(Math.random() * users.length)];
      if (person.id !== user.id) {
        break;
      }
    }
    return person;
  }

  setCurrentPerson() {
    const person = this.getRandomPerson();
    this.setState({
      currentPerson: person
    });
  }

  render() {
    console.log("currentPerson is:", this.state.currentPerson);
    return (
      <div>
        <h2>Swipe</h2>
        <PersonPhotoCard data={this.state.currentPerson} />
      </div>
    );
  }
}

SwipeContainer.propTypes = {
  user: PropTypes.object.isRequired, // need user passed down to see only users of the gender they like
  users: PropTypes.array.isRequired
};
export default SwipeContainer;
