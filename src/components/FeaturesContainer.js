import React from "react";
import { Tab } from "semantic-ui-react";
import SearchContainer from "./SearchContainer";
import SwipeContainer from "./SwipeContainer";
import MatchesContainer from "./MatchesContainer";
import { USERS } from "./users.js";
import { INTERESTS } from "./interests.js";

const panes = [
  {
    menuItem: "Search",
    render: () => (
      <Tab.Pane>
        <SearchContainer users={USERS} interests={INTERESTS} />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Swipe",
    render: () => (
      <Tab.Pane>
        <SwipeContainer users={USERS} />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Matches",
    render: () => (
      <Tab.Pane>
        <MatchesContainer users={USERS} />
      </Tab.Pane>
    )
  }
];

const FeaturesContainer = () => <Tab panes={panes} renderActiveOnly />;

export default FeaturesContainer;
