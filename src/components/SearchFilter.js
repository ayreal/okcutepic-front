import React, { Component } from "react";
import { Form, Card, Dropdown, Button, Checkbox } from "semantic-ui-react";

let options = [];
class SearchFilter extends Component {
  state = {};
  makeInterestOptions = () => {
    options = this.props.interests.map(interest => {
      var obj = {};
      obj.key = interest.id;
      obj.text = interest.name;
      obj.value = interest.name;
      return obj;
    });
  };

  handleSearchChange = event => {
    debugger;
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
            onChange={this.handleSearchChange}
            closeOnChange
            options={options}
          />
          <Checkbox
            label="Shared Interests Only"
            onClick={this.handleCheckbox}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Card>
    );
  }
}

export default SearchFilter;
