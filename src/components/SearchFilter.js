import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Form,
  Card,
  Dropdown,
  Button,
  Checkbox,
  Header,
  Icon
} from "semantic-ui-react";

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
        <Header as="h2">
          <Icon name="search" />
          <Header.Content>Search Users By Interest</Header.Content>
        </Header>
        <Form onChange={this.handleSearchChange}>
          <Dropdown
            placeholder="Interests"
            fluid
            search
            multiple
            selection
            closeOnChange
            options={options}
          />
          <Checkbox
            label="Shared Interests Only"
            onClick={this.handleCheckbox}
          />
          <Button type="submit" color="purple">
            Submit
          </Button>
        </Form>
      </Card>
    );
  }
}

SearchFilter.propTypes = {
  interests: PropTypes.array.isRequired,
  handleInterestsFilter: PropTypes.func.isRequired
};

export default SearchFilter;
