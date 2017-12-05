import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

const AppHeader = props => {
  const renderWelcome = () => {
    if (props.user.id) {
      return <Menu.Item as="h3">Welcome, {props.user.name}!</Menu.Item>;
    } else {
      return null;
    }
  };

  // const AuthButton = withRouter(
  //   ({ history }) =>
  //     props.user.id ? (
  //       <Button
  //         default
  //         circular={true}
  //         onClick={() => {
  //           props.handleLogout(() => history.push("/"));
  //         }}
  //       >
  //         Sign out
  //       </Button>
  //     ) : (
  //       <Button default circular={true} as={Link} to="/">
  //         Login
  //       </Button>
  //     )
  // );

  const renderButton = () => {
    if (props.user.id) {
      return (
        <Button default circular={true} onClick={props.handleLogout}>
          Logout
        </Button>
      );
    } else {
      return (
        <Button default circular={true} as={Link} to="/">
          Login
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
