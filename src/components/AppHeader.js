import React from "react";
import { Container, Menu } from "semantic-ui-react";

const AppHeader = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as="a" header>
        OkCutepic
      </Menu.Item>
      <Menu.Item as="a">Home</Menu.Item>
    </Container>
  </Menu>
);

export default AppHeader;
