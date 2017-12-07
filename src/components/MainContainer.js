import React, { Component } from "react";
import FeaturesContainer from "./FeaturesContainer";
import { fetchCurrentUser } from "./Adapter";

class MainContainer extends Component {
  render() {
    console.log("MainContainer user is:", this.props.user);
    return <FeaturesContainer user={this.props.user} />;
  }
}

export default MainContainer;
