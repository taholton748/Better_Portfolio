import React from "react";

function Nav(props) {
  const setPage = props?.setPage;

  return (
    <header className='flex'>
      <h2>
        <a href="/">
            📸 🛩️ Tyler Holton 💻 🌴
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2" onClick={() => setPage("about")}>
            <a href="#about">About me</a>
          </li>
          <li className="mx-2" onClick={() => setPage("portfolio")}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="mx-2" onClick={() => setPage("contact")}>
            <a href="#contact">Contact</a>
          </li>
          <li className="mx-2" onClick={() => setPage("resume")}>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
