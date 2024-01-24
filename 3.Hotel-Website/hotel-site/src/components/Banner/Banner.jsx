import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <section id="banner">
        <div className="banner-heighlight">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h2>Get 50% off on top destination</h2>
                <p>
                  Book your tickets before dash date and avail 50% flat
                  discount.
                </p>
              </div>
              <div className="col-md-4">
                <button className="login-btn">Book now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
