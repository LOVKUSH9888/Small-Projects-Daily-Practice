import React from "react";
import "./FeaturedDest.css";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
const FeaturedDest = () => {
  return (
    <>
      <div id="section">
        <h1>Featured Destination</h1>
        {/* Container for Cards */}
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-img">
                  <img src="../../../public/images/1.jpg" alt="" />
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
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-img">
                  <img src="../../../public/images/2.jpg" alt="" />
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
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-img">
                  <img src="../../../public/images/3.jpg" alt="" />
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
