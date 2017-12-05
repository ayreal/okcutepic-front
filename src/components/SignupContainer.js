import React, { Component } from "react";
import { Button, Form, Card, Select, Container } from "semantic-ui-react";
import { fetchInterests } from "./Adapter.js";
import { Link } from "react-router-dom";
import AvatarOptions from "../Avatar.js";
import { postUser } from "./Adapter.js";

const genderOptions = [
  { value: 0, text: "Male" },
  { text: "Female", value: 1 },
  { text: "Other", value: 2 }
];

class SignupContainer extends Component {
  constructor() {
    super();

    this.state = {
      newUser: {},
      interests: []
    };
  }

  componentDidMount() {
    fetchInterests().then(json =>
      this.setState({
        interests: json
      })
    );
  }

  saveInterests = () => {
    let options = this.state.interests.map(interest => {
      var obj = { ...interest };
      obj.key = interest.name;
      obj.text = interest.name;
      obj.value = interest.name;
      return obj;
    });
    return options;
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      newUser: { ...this.state.newUser, [name]: value }
    });
    console.log(this.state);
  };

  handleDropdown = (event, data) => {
    const { name, value } = data;
    this.setState({
      newUser: { ...this.state.newUser, [name]: value }
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    const body = { user: this.state.newUser };
    console.log(body);
    postUser(body);
    this.props.history.push("/");
  };

  handleAddition = (e, { value }) => {
    console.log("here");
  };

  render() {
    return (
      <Container text style={{ marginTop: "7em" }}>
        <Card>
          <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Field>
                <label>Name</label>
                <input placeholder="Name" name="name" />
              </Form.Field>
              <Form.Field>
                <label>Age</label>
                <input placeholder="Age" name="age" />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Username" name="username" />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" name="password" type="password" />
            </Form.Field>

            <Form.Field>
              <Form.TextArea
                label="Bio"
                name="bio"
                placeholder="Tell us more about you..."
              />
            </Form.Field>
            <Form.Field>
              <label>Location</label>
              <input placeholder="Location" name="location" />
            </Form.Field>
            <Form.Field>
              <label>Photo URL</label>
              <input placeholder="Photo" name="photo" />
            </Form.Field>
            <Form.Field
              onChange={this.handleDropdown}
              control={Select}
              label="Avatar"
              name="avatar"
              options={AvatarOptions}
              placeholder="Avatar"
            />
            <Form.Field
              onChange={this.handleDropdown}
              control={Select}
              label="Gender"
              name="gender"
              options={genderOptions}
              placeholder="Gender"
            />
            <label>Seeking</label>
            <Form.Dropdown
              onChange={this.handleDropdown}
              icon="close"
              placeholder="Seeking"
              name="gender_choice"
              fluid
              selection
              options={[
                { text: "Men", value: 0 },
                { text: "Women", value: 1 },
                { text: "Any", value: 2 }
              ]}
            />
            <label>Interests</label>
            <Form.Dropdown
              onChange={this.handleDropdown}
              placeholder="Interests"
              name="interests"
              fluid
              search
              multiple
              selection
              allowAdditions
              closeOnChange
              onAddItem={this.handleAddition}
              options={this.saveInterests()}
            />

            <Button type="submit">Submit</Button>
          </Form>
        </Card>
      </Container>
    );
  }
}

export default SignupContainer;
