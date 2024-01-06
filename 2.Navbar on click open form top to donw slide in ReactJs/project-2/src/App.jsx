import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container">
        <h1>Logo</h1>
        {/* Hmaburger */}
        <div>
          <div id="myNav" className={`overlay ${isOpen ? "open" : ""}`}>
            <a href="#" className="closebtn" onClick={toggleNav}>
              &times;
            </a>
            <div className="overlay-content">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div className="hamburger" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
