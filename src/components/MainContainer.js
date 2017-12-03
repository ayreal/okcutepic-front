import React, { Component } from "react";
import { USER } from "./user.js";
import FeaturesContainer from "./FeaturesContainer";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <FeaturesContainer user={USER} />
      </div>
    );
  }
}

export default MainContainer;
