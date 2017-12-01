import React, { Component } from "react";
import { Button, Checkbox, Form, Card, Dropdown } from "semantic-ui-react";
import { INTERESTS } from "./interests.js";

const options = INTERESTS.map(interest => {
  var obj = {};
  obj.key = interest.name;
  obj.text = interest.name;
  obj.value = interest.name;
  return obj;
});
console.log(options);

class SignupContainer extends Component {
  handleAddition() {
    console.log("here");
  }

  render() {
    return (
      <Card>
        <Form>
          <Form.Group>
            <Form.Field>
              <label>Name</label>
              <input placeholder="Name" />
            </Form.Field>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Username" />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <label>Age</label>
              <input placeholder="Age" />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <Form.TextArea
              label="Bio"
              placeholder="Tell us more about you..."
            />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input placeholder="Location" />
          </Form.Field>
          <Form.Field>
            <label>Photo URL</label>
            <input placeholder="Photo" />
          </Form.Field>
          <label>I am a..</label>
          <Dropdown
            label="I am a.."
            placeholder="I am a.."
            fluid
            selection
            options={[
              { text: "Man", value: "Man" },
              { text: "Woman", value: "Woman" },
              { text: "Other", value: "Other" }
            ]}
          />
          <label>Seeking</label>
          <Dropdown
            placeholder="Seeking"
            fluid
            selection
            options={[
              { text: "Men", value: "Men" },
              { text: "Women", value: "Women" },
              { text: "Any", value: "Any" }
            ]}
          />
          <Form.Group />

          <Dropdown
            placeholder="Interests"
            fluid
            search
            multiple
            selection
            allowAdditions
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
