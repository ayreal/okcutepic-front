import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
import MainContainer from "./components/MainContainer";
import { Route } from "react-router-dom";
import { fetchCurrentUser } from "./components/Adapter";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: false,
    auth: {
      user: {}
    }
  };

  // AH - IN PROGRESS
  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     fetchCurrentUser().then(data => console.log(data));
  //   }
  // }

  handleLogin = user => {
    const currentUser = { user: user };
    this.setState({ auth: currentUser });

    // AH - In progress
    //localStorage.setItem("token", user.id);
  };

  handleLogout = () => {
    this.setState({ auth: { user: {} } });
    localStorage.removeItem("token");
  };

  render() {
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
