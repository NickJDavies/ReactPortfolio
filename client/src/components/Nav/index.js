import React from "react";

function Nav() {
  return (
    <nav class="navigation navbar navbar-expand bg-dark navbar-dark">
        <h1 class="navbar-brand">Nicholas Davies</h1>
        <ul class="navbar-nav hi">
            <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="/portfolio">Portfolio</a></li>
            <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
        </ul>
    </nav>
  );
}

export default Nav;
