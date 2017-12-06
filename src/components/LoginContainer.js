import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchUser } from "./Adapter";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class LoginContainer extends Component {
  state = {
    error: false,
    fields: {
      username: "",
      password: ""
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    fetchUser({ auth: this.state.fields }).then(user => {
      // continue with AUTH
      if (user.error) {
        this.setState({ error: true });
      } else {
        debugger;
        this.props.handleLogin(user);
        this.props.history.push("/welcome");
      }
    });
  };

  handleFormInput = event => {
    const newFields = {
      ...this.state.fields,
      [event.target.name]: event.target.value
    };
    this.setState({ fields: newFields });
  };

  render() {
    // console.log("props in LoginContainer:", this.props);
    return (
      <div className="login-form">
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="purple" textAlign="center">
              Log-in to your account
              {this.state.error ? <h3>Try again</h3> : null}
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  name="username"
                  value={this.state.fields.username}
                  onChange={this.handleFormInput}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.fields.password}
                  onChange={this.handleFormInput}
                />

                <Button
                  type="submit"
                  color="purple"
                  circular={true}
                  fluid
                  size="large"
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default LoginContainer;
