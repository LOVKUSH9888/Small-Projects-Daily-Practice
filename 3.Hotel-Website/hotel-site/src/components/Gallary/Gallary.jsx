import React, { useEffect } from "react";
import "./Gallary.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Gallary = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section id="gallary">
        <h1 data-aos="fade-right" className="text-center my-5">Travel Gallary</h1>
        {/* container */}
        <div className="container">
          <div className="row">
            <div data-aos="fade-right" className="col-md-3">
              <div className="gallary-box">
                <img src="../../../images/travel-1.jpg" alt="" />
                <h4>Chandigarh</h4>
              </div>
            </div>
            <div data-aos="fade-up" className="col-md-3">
              <div className="gallary-box">
                <img src="../../../images/travel-2.jpg" alt="" />
                <h4>Panchkula</h4>
              </div>
            </div>
            <div data-aos="fade-up" className="col-md-3">
              <div className="gallary-box">
                <img src="../../../images/travel-3.jpg" alt="" />
                <h4>Mohali</h4>
              </div>
            </div>
            <div data-aos="fade-left" className="col-md-3">
              <div className="gallary-box">
                <img src="../../../images/travel-4.jpg" alt="" />
                <h4>Noida</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallary;
