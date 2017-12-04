import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
import MainContainer from "./components/MainContainer";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: false,
    auth: {
      user: {}
    }
  };

  handleLogin = user => {
    const currentUser = { user: user };
    this.setState({ auth: currentUser });
    // debugger;
  };

  render() {
    console.log("current user state is:", this.state.auth);
    const { auth } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <AppHeader user={auth.user} isLoggedIn={this.state.isLoggedIn} />
          <Route
            exact
            path="/"
            render={() => <LoginContainer handleLogin={this.handleLogin} />}
          />
          <Route
            path="/welcome"
            render={() => <MainContainer user={auth.user} />}
          />
          <Route path="/signup" component={SignupContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
