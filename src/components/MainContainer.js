import React, { Component } from "react";
import FeaturesContainer from "./FeaturesContainer";
import { fetchCurrentUser } from "./Adapter";

class MainContainer extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      fetchCurrentUser().then(user => {
        this.props.handleLogin(user);
      });
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    console.log("MainContainer user is:", this.props.user);
    return <FeaturesContainer user={this.props.user} />;
  }
}

export default MainContainer;
