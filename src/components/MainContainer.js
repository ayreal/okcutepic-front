import React, { Component } from "react";
import AppHeader from "./AppHeader";
import LoginContainer from "./LoginContainer";
import SignupContainer from "./SignupContainer";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";

class MainContainer extends Component {
  constructor() {
    super();

    this.state = {
      newUser: {}
    };
  }

  handleSignUp = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      newUser: { ...this.state.newUser, [name]: value }
    });
    console.log(this.state);
  };

  handleSignUpDropdown = (event, data) => {
    const { name, value } = data;
    this.setState({
      ...this.state,
      newUser: { ...this.state.newUser, [name]: value }
    });
    console.log(this.state);
  };

  signUpSubmit = () => {
    const body = this.state.newUser;
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => console.log(res));
  };

  render() {
    return (
      <div>
        <AppHeader />
        <LoginContainer />
        <SignupContainer
          handleChange={this.handleSignUp}
          handleDropdown={this.handleSignUpDropdown}
          handleSubmit={this.signUpSubmit}
        />
      </div>
    );
  }
}

export default MainContainer;
