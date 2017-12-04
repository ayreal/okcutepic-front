import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AppHeader = props => {
  const renderWelcome = () => {
    if (props.user.id) {
      return <Menu.Item as="h3">Welcome, {props.user.name}!</Menu.Item>;
    } else {
      null;
    }
  };

  const renderButton = () => {
    if (props.user.id) {
      return (
        <Button default circular={true} onClick={props.handleLogout}>
          Logout
        </Button>
      );
    } else {
      return (
        <Button default circular={true} as={Link} to="/signup">
          Sign Up
        </Button>
      );
    }
  };

  return (
    <Menu fixed="top" color="purple" inverted>
      <Container>
        <Menu.Item as="h1" header>
          OkCutepic
        </Menu.Item>

        <Menu.Menu position="right">
          {renderWelcome()}
          <Menu.Item>{renderButton()}</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};
export default AppHeader;
