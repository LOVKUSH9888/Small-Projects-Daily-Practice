import React from "react";
import "./About.css";
const About = () => {
  return (
    <section id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis, doloremque deserunt atque architecto neque ratione
              excepturi eligendi, iure maiores corporis quisquam nam nihil.
              Laboriosam ad dolore hic obcaecati, ducimus deserunt?orem ipsum
              dolor sit amet, consectetur adipisicing elit. Veritatis,
              doloremque deserunt atque architecto neque ratione excepturi
              eligendi, iure maiores corporis quisquam nam nihil. Laboriosam ad
              dolore hic obcaecati, ducimus deserunt?
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="py-2">React-Js</h4>
            <div
              className="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "25%" }}>
                25%
              </div>
            </div>
            <h4 className="py-2">Node-Js</h4>
            <div
              className="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "65%" , backgroundColor: "red" }}>
                65%
              </div>
            </div>
            <h4 className="py-2">Next-Js</h4>
            <div
              className="progress"
              role="progressbar"
              aria-label="Example with label"
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar" style={{ width: "80%", backgroundColor: "#000" }}>
                80%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
