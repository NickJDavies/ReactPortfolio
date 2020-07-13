import React from "react";
import style from "./style.css"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer"
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav></Nav>

      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
}

export default App;
