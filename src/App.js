import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
import MainContainer from "./components/MainContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      auth: {
        user: {}
      }
    };
  }

  handleLogin = user => {
    const currentUser = { user: user };
    this.setState({ auth: currentUser });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            exact
            path="/"
            render={() => <LoginContainer handleLogin={this.handleLogin} />}
          />
          <Route path="/signup" component={SignupContainer} />
          <Route path="/welcome" component={MainContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
