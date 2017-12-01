import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
import MainContainer from "./components/MainContainer";
// import FixedMenu from "./components/FixedMenu";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={LoginContainer} />
          <Route path="/signup" component={SignupContainer} />
          <Route path="/welcome" component={MainContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
