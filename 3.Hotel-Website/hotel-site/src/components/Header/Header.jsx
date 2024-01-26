import React, { useEffect } from "react";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section id="header">
        {/* Header Container */}
        <div className="container">
          <h1 data-aos="fade-right" className="text-white">Travel-World</h1>
          <button data-aos="fade-left" className="login-btn">Login</button>
        </div>
        {/* Mid section text */}
        <div data-aos="fade-up" className="container-2">
          <h1>Travel Accross The Glove</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
            vero eum fuga quis aut deserunt harum.
          </p>
          {/* Button */}
          <div className="input-group ">
            <input type="text" placeholder="Search" className="form-control" />
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
