import React, { useEffect } from "react";
import "./FeaturedDest.css";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const FeaturedDest = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div id="section">
        <h1 data-aos="fade-right">Featured Destination</h1>
        {/* Container for Cards */}
        <div className="container my-5">
          <div className="row">
            <div data-aos="fade-right" className="col-md-4">
              <div className="feature-box">
                <div className="feature-img">
                  <img src="../../../images/1.jpg" alt="" />
                  <div className="price">
                    <p>100$</p>
                  </div>
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
                <h3>Moracco</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat nisi possimus, ipsa reiciendis architecto neque sed
                  vel mollitia eligendi eveniet deserunt dolore quisquam quas
                  adipisci. Nihil eveniet molestias ipsa a!
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="col-md-4">
              <div className="feature-box">
                <div className="feature-img">
                  <img src="../../../images/2.jpg" alt="" />
                  <div className="price">
                    <p>100$</p>
                  </div>
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
                <h3>Moracco</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat nisi possimus, ipsa reiciendis architecto neque sed
                  vel mollitia eligendi eveniet deserunt dolore quisquam quas
                  adipisci. Nihil eveniet molestias ipsa a!
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="col-md-4">
              <div className="feature-box">
                <div className="feature-img">
                  <img src="../../../images/3.jpg" alt="" />
                  <div className="price">
                    <p>100$</p>
                  </div>
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
                <h3>Moracco</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat nisi possimus, ipsa reiciendis architecto neque sed
                  vel mollitia eligendi eveniet deserunt dolore quisquam quas
                  adipisci. Nihil eveniet molestias ipsa a!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedDest;
