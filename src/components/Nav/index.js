import React from "react";

function Nav() {
  return (
    <nav className="flex-row">
      <h2 className="navBar">
        <a href="/">Tanner Carter</a>
      </h2>
      <ul className="mx-2 flex-row">
        <li>
          <a href="#about" className="mx-2">
            <button>About Me</button>
          </a>
        </li>
        <li>
          <a href="#portfolio" className="mx-2">
            <button>Portfolio</button>
          </a>
        </li>
        <li>
          <a href="#contact" className="mx-2">
            <button>Contact</button>
          </a>
        </li>
        <li>
          <a href="#resume" className="mx-2">
            <button>Resume</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
