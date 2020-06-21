import React from "react";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Header from "./Header";
import Footer from "./Footer";
import Pricing from "./Misc/Pricing";
import About from "./Misc/About";
import Learn from "./Learn";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/learn" exact component={Learn} />
            <Route path="/pricing" exact component={Pricing} />
            <Route path="/about" exact component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
