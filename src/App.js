import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
// import Home from "./components/Home";

function App() {
  const [page, setPage] = useState("about me"); // about, home, portfolio

  // setPage("contact")

  let currentPage;

  if (page === "home") {
    // TODO: Replace this with the correct page
    currentPage = <About />;
  } else if (page === "portfolio") {
    currentPage = <Portfolio />;
  } else if (page === "about") {
    currentPage = <About />;
  } else if (page === "resume") {
    currentPage = <Resume />;
  } else if (page === "contact") {
    currentPage = <Contact />;
  } else {
    currentPage = <About />;
  }

  console.log("Page: ", page);

  // props

  return (
    <div>
      <Nav setPage={setPage} />
      <main>
        {currentPage}
        {/* <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
