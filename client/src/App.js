import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    
    <nav className="navigation navbar navbar-expand bg-dark navbar-dark">
        <h1 className="navbar-brand">Nicholas Davies</h1>
        <ul className="navbar-nav hi">
            <li className="nav-item"><a className="nav-link" href="/index.html">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/portfolio.html">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact.html">Contact</a></li>
        </ul>
    </nav>

    
    // <div className="container">
    //     <div className="row">
    //         <div className="col-sm-2 col-xs-0"></div>
    //         <div className="col-sm-8 col-xs-12 card">
    //             <h2>About Me</h2>
    //             <div className="container">
                  // <paragraph> My Name is Nicholas Davies, I'm currently a student at UWA. I'm studying Computer Sciences as my major, but really I'm interested in many different areas of science, including Physics, Chemistry, and a few areas of Biology. I also enjoy mathematics a lot, I like the pureness and the logic to it. Most of my family use computers a lot in their careers, which sparked my interest in them at a young age. </paragraph>
                  // <paragraph><a href="https://github.com/NickJDavies">GitHub</a></paragraph>
                  // <paragraph><a href="https://github.com/NickJDavies">Resume</a></paragraph>
                  <link href="https://github.com/NickJDavies"> LinkedIn </link>
                /* </div>
            </div>
          </div>  
        <div className="col-sm-2 col-xs-0"></div>
    </div> */
    // <footer className="fixedFooter bg-dark">
    //     <h4 className="text-center">Made with ♥ By Nick (and a few confusing hours.</h4>
    // </footer>
  );
}

export default App;
