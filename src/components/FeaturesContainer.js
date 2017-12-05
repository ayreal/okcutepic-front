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
    fetchUsers().then(res => this.setState({ users: res }));
    fetchInterests().then(res => this.setState({ interests: res }));
  }

  genderFilteredUsers = () => {
    return this.state.users.filter(
      user => user.gender === this.props.user.gender_choice
    );
  };

  handleLike = data => {
    // make a post with that user's data to the rails api to create a like
    const newData = { ...data, currentUserId: this.props.user.id };
    createLike(newData);
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
              handleLike={this.handleLike}
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
