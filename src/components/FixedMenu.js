import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";

const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as="h1">OkCutepic</Menu.Item>
      <Menu.Item as="a" active>
        Home
      </Menu.Item>
      <Menu.Item as="a">About Us</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button as="a" primary>
            Logout
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default FixedMenu;