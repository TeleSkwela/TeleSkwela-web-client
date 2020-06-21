import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';


class Footer extends React.Component {

  render() {
    return (
      <Navbar bg="primary" variant="dark" fixed="bottom">
        <Container>
          <AwesomeButton type="secondary" size="large">Language</AwesomeButton>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            <Nav.Link disabled> | </Nav.Link>
            <Nav.Link disabled>2020 Teleskwela</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
export default Footer