import React from "react";
import { Tab } from "semantic-ui-react";
import SearchContainer from "./SearchContainer";
import SwipeContainer from "./SwipeContainer";
import MatchesContainer from "./MatchesContainer";

const panes = [
  {
    menuItem: "Search",
    render: () => (
      <Tab.Pane>
        <SearchContainer />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Swipe",
    render: () => (
      <Tab.Pane>
        <SwipeContainer />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Marches",
    render: () => (
      <Tab.Pane>
        <MatchesContainer />
      </Tab.Pane>
    )
  }
];

const FeaturesContainer = () => <Tab panes={panes} />;

export default FeaturesContainer;
