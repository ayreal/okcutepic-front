import React, { Component } from "react";
import SearchContainer from "./SearchContainer";
import SwipeContainer from "./SwipeContainer";
import MatchesContainer from "./MatchesContainer";
import { fetchUsers, fetchInterests, createLike } from "./Adapter";
import { Tab, Container } from "semantic-ui-react";

// https://github.com/Semantic-Org/Semantic-UI-React/issues/1859

class FeaturesContainer extends Component {
  state = {
    users: [],
    interests: []
  };

  componentDidMount() {
    console.log(
      "Inside FeaturesContainer, this.props.user is:",
      this.props.user
    );

    fetchUsers().then(res => this.setState({ users: res }));
    fetchInterests().then(res => this.setState({ interests: res }));
  }

  genderFilteredUsers = () => {
    if (
      this.props.user.gender_choice === 0 ||
      this.props.user.gender_choice === 1
    ) {
      return this.state.users.filter(
        user => user.gender === this.props.user.gender_choice
      );
    } else {
      return this.state.users;
    }
  };

  handleUserLike = data => {
    const userId = this.props.user.id;
    data = { ...data, currentUserId: userId };
    //debugger;
    createLike(data);
  };

  getGenderIcon = gender => {
    if (gender === 0) {
      return "man";
    } else if (gender === 1) {
      return "woman";
    } else {
      return "question";
    }
  };

  render() {
    const panes = [
      {
        menuItem: "Search",
        render: () => (
          <Tab.Pane>
            <SearchContainer
              user={this.props.user}
              users={this.genderFilteredUsers()}
              interests={this.state.interests}
              getGenderIcon={this.getGenderIcon}
              handleUserLike={this.handleUserLike}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Swipe",
        render: () => (
          <Tab.Pane>
            <SwipeContainer
              user={this.props.user}
              users={this.genderFilteredUsers()}
              handleUserLike={this.handleUserLike}
              getGenderIcon={this.getGenderIcon}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Matches",
        render: () => (
          <Tab.Pane>
            <MatchesContainer
              user={this.props.user}
              users={this.state.users}
              getGenderIcon={this.getGenderIcon}
            />
          </Tab.Pane>
        )
      }
    ];

    return (
      <Container text style={{ marginTop: "7em" }}>
        <Tab panes={panes} renderActiveOnly />
      </Container>
    );
  }
}

export default FeaturesContainer;
