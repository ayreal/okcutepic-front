import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
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
        <AppHeader />
        <LoginContainer />
        <SignupContainer />
      </div>
    );
  }
}

export default App;
