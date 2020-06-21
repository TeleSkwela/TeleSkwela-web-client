import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
import logo from "../../assets/teleskwela-logo-removebg-preview.png";

class Header extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "668642444476-5f3s8ja2jk0fj49kbgeo89481sjuu97q.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
    else this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthenticationButton = () => {
    if (!this.props.auth.isSignedIn) {
      return (
        <Button variant="success" onClick={this.onSignInClick}>
          Log In
        </Button>
      );
    } else {
      return (
        <Button variant="success" onClick={this.onSignOutClick}>
          Sign Out
        </Button>
      );
    }
  };

  render() {
    return (
      <Navbar bg="primary" variant="dark" sticky="top" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <AwesomeButton type="primary" size="large">
              <img
                alt=""
                src={logo}
                width="35"
                height="35"
                className="d-inline-block align-top"
              />
              Teleskwela
            </AwesomeButton>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/learn">
                <AwesomeButton type="secondary">Matuto</AwesomeButton>
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              {this.renderAuthenticationButton()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(Header);
