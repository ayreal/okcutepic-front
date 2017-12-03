import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";

const AppHeader = props => (
  <Menu fixed="top" color="purple" inverted>
    <Container>
      <Menu.Item as="h1" header>
        OkCutepic
      </Menu.Item>
      <Menu.Item as="h3">Welcome, {props.user.name}!</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button default>Logout</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default AppHeader;
