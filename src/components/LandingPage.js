import React from 'react';
import { Container } from 'react-bootstrap'
import { AwesomeButton } from 'react-awesome-button';

class LandingPage extends React.Component {
  render() {
    return (
      <Container>
        This is my Landing Page
        <AwesomeButton type="primary">Matuto</AwesomeButton>
      </Container>
    )
  }
}

export default LandingPage;