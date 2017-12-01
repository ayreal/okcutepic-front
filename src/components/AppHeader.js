import React, { Component } from "react";
import { Visibility } from "semantic-ui-react";
import FixedMenu from "./FixedMenu";

class AppHeader extends Component {
  state = { visible: true }; // remove hardcoding

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  render() {
    const { visible } = this.state;

    return (
      <div>
        {visible ? <FixedMenu /> : null}
        
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        />
      </div>
    );
  }
}
export default AppHeader;
