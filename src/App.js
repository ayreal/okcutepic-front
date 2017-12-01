import React, { Component } from "react";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
import MainContainer from "./components/MainContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  login = data => {};
  render() {
    return (
      <div className="App">
        <LoginContainer />
        <SignupContainer />
        <MainContainer />
      </div>
    );
  }
}

export default App;
