import React, { Component } from "react";
import { Form, Card, Dropdown, Button } from "semantic-ui-react";

let options = [];
class SearchFilter extends Component {
  makeInterestOptions = () => {
    options = this.props.interests.map(interest => {
      var obj = {};
      obj.key = interest.name;
      obj.text = interest.name;
      obj.value = interest.name;
      return obj;
    });
    console.log("options is", options);
  };

  render() {
    this.makeInterestOptions();
    return (
      <Card>
        <Form>
          <Dropdown
            placeholder="Interests"
            fluid
            search
            multiple
            selection
            closeOnChange
            options={options}
          />

          <Button type="submit">Submit</Button>
        </Form>
      </Card>
    );
  }
}

export default SearchFilter;
