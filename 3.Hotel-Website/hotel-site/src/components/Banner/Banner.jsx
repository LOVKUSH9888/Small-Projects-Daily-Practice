import React, { useEffect } from "react";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section data-aos="fade-right" id="banner">
        <div className="banner-heighlight">
          <div className="container">
            <div className="row">
              <div data-aos="fade-right" className="col-md-8">
                <h2>Get 50% off on top destination</h2>
                <p>
                  Book your tickets before dash date and avail 50% flat
                  discount.
                </p>
              </div>
              <div data-aos="fade-left" className="col-md-4">
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
