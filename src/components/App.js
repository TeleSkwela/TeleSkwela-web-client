import React from "react";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Header from "./Header";
import Footer from "./Footer";
import Pricing from "./Misc/Pricing";
import About from "./Misc/About";
import Learn from "./Learn";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrap = styled.div`
  flex: 1;
`;

const App = () => {
  return (
    <PageContainer>
      <Router history={history}>
        <Header />
        <ContentWrap>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/learn" exact component={Learn} />
            <Route path="/pricing" exact component={Pricing} />
            <Route path="/about" exact component={About} />
          </Switch>
        </ContentWrap>
        <Footer />
      </Router>
    </PageContainer>
  );
};

export default App;
