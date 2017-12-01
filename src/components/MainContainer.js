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
import AppHeader from "./AppHeader";
import FeaturesContainer from "./FeaturesContainer";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <FeaturesContainer />
      </div>
    );
  }
}

export default MainContainer;
