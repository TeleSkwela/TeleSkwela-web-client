import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AwesomeButton } from "react-awesome-button";
import history from "../../history";
import Card from "react-bootstrap/Card";
import landingBg1 from "../../assets/landing-bg-1.jpg";
import landingBg2 from "../../assets/landing-bg-2.jpg";
import featureLogo1 from "../../assets/landing-feature-1.png";
import featureLogo2 from "../../assets/landing-feature-2.png";
import featureLogo3 from "../../assets/landing-feature-3.png";

const BannerTitle = styled.h1`
  font-size: 3em;
  font-family: "Merriweather", serif;
  line-height: 1.35em;
  padding: 1em 2em 0;
  position: relative;
`;

const BannerSubTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  line-height: 1.5em;
`;

const BannerButton = styled.div`
  padding: 1em 0 0;
`;

const BannerContainer = styled.div`
  background: url(${landingBg1}) fixed center;
  background-size: cover;
  width: 100%;
  padding: 5em 0 5em;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeatureTitle = styled.h2`
  margin: 2em 0 2em;
  font-family: "Roboto", sans-serif;
`;

const FeatureContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0 4rem;
`;

class LandingPage extends React.Component {
  renderFeature = (title, description, photo) => {
    return (
      <Card
        border="info"
        style={{
          width: "20rem",
          height: 500,
        }}
      >
        <Card.Img
          variant="top"
          src={photo}
          style={{
            width: 250,
            height: 250,
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 25,
          }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  render() {
    return (
      <div>
        <BannerContainer>
          <BannerTitle>Ang kabataan ang pag-asa ng bayan</BannerTitle>
          <BannerSubTitle>
            Paunlarin ang talino at galing ng Pilipino sa larangan ng agham,
            sining, kultura, at iba pa!
          </BannerSubTitle>
          <BannerButton>
            <AwesomeButton
              type="primary"
              onPress={() => {
                history.push("/learn");
              }}
            >
              Simulan nang Matuto
            </AwesomeButton>
          </BannerButton>
        </BannerContainer>
        <FeatureContainer>
          <Container>
            <Row>
              <Col>
                <FeatureTitle>
                  Mga Natatanging Kakayahan ni Teleskwela
                </FeatureTitle>
              </Col>
            </Row>
            <Row>
              <Col>
                {this.renderFeature(
                  "Gawang Pilipino para sa Pilipino",
                  "Ang TeleSkwela ay sinimulan ng mga Pilipino para sa kaunlaran estado ng edukasyon ng Pilipinas.",
                  featureLogo1
                )}
              </Col>
              <Col>
                {this.renderFeature(
                  "Pasadyang Aralin",
                  "Binibigyang importansya ng TeleSkwela ang natatanging kakayahan ng bawat estudyante. Maaaring matuto sa sariling bilis upang maintindihan ng maigi ang nilalaman",
                  featureLogo2
                )}
              </Col>
              <Col>
                {this.renderFeature(
                  "Sangkap na Kakayahan upang Magturo",
                  "Ang TeleSkwela ay maaaring gamitin ng mga guro upang bihasain ang kani-kanilang mga estudyante",
                  featureLogo3
                )}
              </Col>
            </Row>
          </Container>
        </FeatureContainer>

        <Container>
          <Row>
            <Col>
              <h2>TeleSkwela for Schools</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>Learn anywhere using gadgets you already have</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>Testimonials</h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LandingPage;
