import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SmoothScroll from 'smooth-scroll';

const MyComponent = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  React.useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true
    });
  }, []);

  return (
    <div>
      {/* Header Section */}
      <section id="header">
        <div className="header-container">
          <img src="images/logo.png" alt="logo" className="logo-img" />
          <div className="header-text">
            <h1>
              Lorem Ipsum is simply dummy <br />
              text of the printing and typesetting.
            </h1>
            <span className="span-square"></span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <button>Read More</button>
            <div className="line">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Navigation */}
      <nav id="sideNav" style={{ right: isSidebarOpen ? '0' : '-250px' }}>
        <ul>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">About Us</Link>
          </li>
          <li>
            <Link to="#">Features</Link>
          </li>
          <li>
            <Link to="#">Courses</Link>
          </li>
          <li>
            <Link to="#">Offer</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <img
        src="images/menu.png"
        alt="hamburger"
        id="hamburger"
        onClick={toggleSidebar}
      />
    </div>
  );
};

export default MyComponent;
