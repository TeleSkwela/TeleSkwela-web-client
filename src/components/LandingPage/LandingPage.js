import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
  font-size: 20rem;
`;

class LandingPage extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <Title>Ang Kabataan ang pag-asa ng bayan</Title>
          <p>
            Palakasin ang talino at galing ng Pilipino sa larangan ng agham,
            sining, kultura, at iba pa!
          </p>
        </Container>
      </Jumbotron>
    );
  }
}

export default LandingPage;
