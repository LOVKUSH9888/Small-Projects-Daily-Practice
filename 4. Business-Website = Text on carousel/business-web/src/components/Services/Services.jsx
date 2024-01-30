import React from "react";
import "./Services.css";

import { FaLaptop } from "react-icons/fa";
const Services = () => {
  return (
    <>
      <section id="services">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <hr className="" />
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="cards">
                <FaLaptop className="iconsbadge" />
                <h4>Web Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  iure nemo illo quae quidem earum repellendus corporis, ullam,
                  soluta neque ex alias corrupti officiis veritatis natus sit.
                  Blanditiis, optio enim!
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="cards">
                <FaLaptop className="iconsbadge" />
                <h4>Web Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  iure nemo illo quae quidem earum repellendus corporis, ullam,
                  soluta neque ex alias corrupti officiis veritatis natus sit.
                  Blanditiis, optio enim!
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="cards">
                <FaLaptop className="iconsbadge" />
                <h4>Web Development</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  iure nemo illo quae quidem earum repellendus corporis, ullam,
                  soluta neque ex alias corrupti officiis veritatis natus sit.
                  Blanditiis, optio enim!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
