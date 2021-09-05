import React from "react";

function Nav() {
  const categories = [
    {
      name: "Contact",
      description: "Form to contact Tanner Carter, links to reach out",
    },
    { name: "Resume", description: "Tanner Carter's Resume" },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label=""></span>
          Tanner Carter
        </a>
      </h2>

      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li>
            <span>Portfolio</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
