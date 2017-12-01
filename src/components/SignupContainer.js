import React, { Component } from "react";
import { Button, Checkbox, Form, Card, Dropdown } from "semantic-ui-react";
// import { Interests } from "./const.js";

const INTERESTS = [
  {
    id: 1,
    name: "football",
    created_at: "2017-11-30T19:50:24.200Z",
    updated_at: "2017-11-30T19:50:24.200Z"
  },
  {
    id: 2,
    name: "drinking",
    created_at: "2017-11-30T19:50:24.209Z",
    updated_at: "2017-11-30T19:50:24.209Z"
  },
  {
    id: 3,
    name: "social activism",
    created_at: "2017-11-30T19:50:24.216Z",
    updated_at: "2017-11-30T19:50:24.216Z"
  },
  {
    id: 4,
    name: "film making",
    created_at: "2017-11-30T19:50:24.225Z",
    updated_at: "2017-11-30T19:50:24.225Z"
  }
];

class SignupContainer extends Component {
  rebuildInterests() {
    return INTERESTS.map(interest => {
      const newObj = {};
      newObj.key = interest.name;
      newObj.name = interest.name;
      newObj.value = interest.name;
    });
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
            placeholder="Skills"
            fluid
            multiple
            selection
            options={this.rebuildInterests()}
          />

          <Button type="submit">Submit</Button>
        </Form>
      </Card>
    );
  }
}

export default SignupContainer;
