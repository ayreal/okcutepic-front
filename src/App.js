import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
import MainContainer from "./components/MainContainer";
import { Route } from "react-router-dom";
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

  handleLogout = () => {
    this.setState({ auth: { user: {} } });
  };

  render() {
    console.log("current user state is:", this.state.auth);
    const { auth } = this.state;
    return (
      <div className="App">
        <AppHeader user={auth.user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={props => (
            <LoginContainer {...props} handleLogin={this.handleLogin} />
          )}
        />
        <Route
          path="/welcome"
          render={() => <MainContainer user={auth.user} />}
        />
        <Route path="/signup" component={SignupContainer} />
      </div>
    );
  }
}

export default App;
