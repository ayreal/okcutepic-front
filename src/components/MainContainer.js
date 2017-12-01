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
import FeaturesContainer from "./FeaturesContainer";
import AppHeader from "./AppHeader";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <FeaturesContainer />
        <AppHeader />
      </div>
    );
  }
}

export default MainContainer;
