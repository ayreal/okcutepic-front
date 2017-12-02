import React, { Component } from "react";
import PersonPhotoCard from "./PersonPhotoCard";
import PropTypes from "prop-types";

class SwipeContainer extends Component {
  state = {
    currentPerson: {}
  };

  componentDidMount() {
    this.setCurrentPerson();
  }

  getRandomPerson = () => {
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
  };

  setCurrentPerson = () => {
    console.log("inside, this is", this);
    console.log("inside, props are", this.props);
    const person = this.getRandomPerson();
    console.log("inside, person is", person);
    this.setState({
      currentPerson: person
    });
  };

  render() {
    console.log("currentPerson is:", this.state.currentPerson);
    return (
      <div>
        <h2>Swipe</h2>
        <PersonPhotoCard
          data={this.state.currentPerson}
          handleLike={this.props.handleLike}
          nextPerson={this.setCurrentPerson}
        />
      </div>
    );
  }
}

SwipeContainer.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  handleLike: PropTypes.func
};
export default SwipeContainer;
