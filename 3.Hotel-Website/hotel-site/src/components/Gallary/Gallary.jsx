import React from "react";
import "./Gallary.css";
const Gallary = () => {
  return (
    <>
      <section id="gallary">
        <h1 className="text-center my-5">Travel Gallary</h1>
        {/* container */}
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="gallary-box">
                <img src="../../../public/images/travel-1.jpg" alt="" />
                <h4>Chandigarh</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="gallary-box">
                <img src="../../../public/images/travel-2.jpg" alt="" />
                <h4>Panchkula</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="gallary-box">
                <img src="../../../public/images/travel-3.jpg" alt="" />
                <h4>Mohali</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="gallary-box">
                <img src="../../../public/images/travel-4.jpg" alt="" />
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
