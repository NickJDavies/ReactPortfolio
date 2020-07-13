import React from "react";
import style from "./style.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer"
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav></Nav>

      <Router>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
