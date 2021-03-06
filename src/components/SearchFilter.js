import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Form,
  Card,
  Dropdown,
  Button,
  Checkbox,
  Header,
  Icon,
  Input
} from "semantic-ui-react";

let options = [];
class SearchFilter extends Component {
  makeInterestOptions = () => {
    options = this.props.interests.map(interest => {
      const obj = { ...interest };
      obj.key = interest.name;
      obj.text = interest.name;
      obj.value = interest;
      return obj;
    });
  };

  render() {
    this.makeInterestOptions();
    return (
      <Card>
        <Header as="h2">
          <Icon name="search" />
          <Header.Content>Search Users By Interest</Header.Content>
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.props.handleChange}
            value={this.props.searchTerm}
          />
          <Checkbox
            label="Shared Interests Only"
            onChange={this.props.handleCheckbox}
            checked={this.props.isChecked}
          />
          <Card.Content extra>
            <Button type="submit" color="purple" circular={true}>
              Search
            </Button>
          </Card.Content>
        </Form>
      </Card>
    );
  }
}

SearchFilter.propTypes = {
  interests: PropTypes.array.isRequired,
  handleDropdown: PropTypes.func.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired
};

export default SearchFilter;
