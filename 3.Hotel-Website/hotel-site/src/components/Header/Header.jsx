import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <section id="header">
        {/* Header Container */}
        <div className="container">
          <h1 className="text-white">Travel-World</h1>
          <button className="login-btn">Login</button>
        </div>
        {/* Mid section text */}
        <div className="container-2">
          <h1>Travel Accross The Glove</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            vero eum fuga quis aut deserunt harum.
          </p>
          {/* Button */}
          <div className="input-group ">
            <input type="text" placeholder="Search" className="form-control"/>
            <div className="input-group-append">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
