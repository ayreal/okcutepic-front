import React, { Component } from "react";
import { Button, Form, Card, Select } from "semantic-ui-react";
import { INTERESTS } from "./interests.js";

const options = INTERESTS.map(interest => {
  var obj = { ...interest };
  obj.key = interest.name;
  obj.text = interest.name;
  obj.value = interest;
  return obj;
});

const genderOptions = [
  { value: 0, text: "Male" },
  { text: "Female", value: 1 },
  { text: "Other", value: 2 }
];

class SignupContainer extends Component {
  handleAddition() {
    console.log("here");
  }

  render() {
    return (
      <Card>
        <Form
          onChange={this.props.handleChange}
          onSubmit={this.props.handleSubmit}
        >
          <Form.Group>
            <Form.Field>
              <label>Name</label>
              <input placeholder="Name" name="name" />
            </Form.Field>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Username" name="username" />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <label>Age</label>
              <input placeholder="Age" name="age" />
            </Form.Field>
          </Form.Group>
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
            onChange={this.props.handleDropdown}
            control={Select}
            label="Gender"
            name="gender"
            options={genderOptions}
            placeholder="Gender"
          />
          <label>Seeking</label>
          <Form.Dropdown
            onChange={this.props.handleDropdown}
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

          <Form.Dropdown
            onChange={this.props.handleDropdown}
            placeholder="Interests"
            name="interests"
            fluid
            search
            multiple
            selection
            allowAdditions
            closeOnChange
            onAddItem={this.handleAddition}
            options={options}
          />

          <Button type="submit">Submit</Button>
        </Form>
      </Card>
    );
  }
}

export default SignupContainer;
