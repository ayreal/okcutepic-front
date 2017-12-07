import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import LoginContainer from "./components/LoginContainer";
import SignupContainer from "./components/SignupContainer";
import MainContainer from "./components/MainContainer";
import { Route, withRouter } from "react-router-dom";
import { fetchCurrentUser } from "./components/Adapter";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: {
        user: {}
      }
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      fetchCurrentUser().then(user => {
        this.handleLogin(user);
      });
    }
  }

  handleLogin = user => {
    // debugger;
    // const auth = this.state.auth
    // user.currentUser.interests = "cats";
    debugger;
    // const interests = user.currentUser.interests;
    console.log("user API response in handleLogin:", user);

    this.setState({
      auth: {
        ...this.state.auth,
        user: {
          ...user.currentUser,
          interests: user.currentUser.interests
        }
      }
    });
    localStorage.setItem("token", user.token);
    console.log("state in handleLogin", this.state);
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
    //history.push("/");
  };

  render() {
    console.log("inside app, this.state", this.state);
    // console.log("inside app, USER.INTERESTS", this.state.auth.user.interests);

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
          render={props => (
            <MainContainer
              {...props}
              user={auth.user}
              handleLogin={this.handleLogin}
            />
          )}
        />
        <Route path="/signup" component={SignupContainer} />
      </div>
    );
  }
}

export default App;
