import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";

const AppHeader = props => {
  const renderWelcome = () =>
    props.user.id ? (
      <Menu.Item as="h3">Welcome, {props.user.name}!</Menu.Item>
    ) : null;

  return (
    <Menu fixed="top" color="purple" inverted>
      <Container>
        <Menu.Item as="h1" header>
          OkCutepic
        </Menu.Item>

        <Menu.Menu position="right">
          {renderWelcome}
          <Menu.Item>
            <Button default circular={true}>
              Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};
export default AppHeader;
