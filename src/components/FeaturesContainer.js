import React from "react";
import { Tab } from "semantic-ui-react";
import SearchContainer from "./SearchContainer";
import SwipeContainer from "./SwipeContainer";
import MatchesContainer from "./MatchesContainer";
import { USERS } from "./users.js";
import { USER } from "./user.js";
import { INTERESTS } from "./interests.js";

const genderFilteredUsers = () => {
  return USERS.filter(user => user.gender === USER.gender_choice);
};

const handleLike = data => {
  // make a post with that user's data to the backend to create a like
  debugger;
};

const panes = [
  {
    menuItem: "Search",
    render: () => (
      <Tab.Pane>
        <SearchContainer
          user={USER}
          users={genderFilteredUsers()}
          interests={INTERESTS}
        />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Swipe",
    render: () => (
      <Tab.Pane>
        <SwipeContainer
          user={USER}
          users={genderFilteredUsers()}
          handleLike={handleLike}
        />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Matches",
    render: () => (
      <Tab.Pane>
        <MatchesContainer user={USER} users={USERS} />
      </Tab.Pane>
    )
  }
];

const FeaturesContainer = () => <Tab panes={panes} renderActiveOnly />;

export default FeaturesContainer;
