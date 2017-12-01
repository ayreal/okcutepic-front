import React, { Component } from "react";

import FeaturesContainer from "./FeaturesContainer";
import AppHeader from "./AppHeader";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <FeaturesContainer />
        <AppHeader />
      </div>
    );
  }
}

export default MainContainer;
