import React from "react";
import "./Carousel.css"
const Carousel = () => {
  return (
    <div className="slider-part">
      <div id="Header-Slider" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#Header-Slider"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#Header-Slider"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#Header-Slider"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/banner1.jpg"
              className="d-block img-fluid"
              alt="..."
            />
            {/* Adding text for captions */}
            <div
              className="carousel-caption"
              style={{ transform: "translateY(-260%)" }}
            >
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/banner2.jpg"
              className="d-block img-fluid"
              alt="..."
            />
            {/* Adding text for captions */}
            <div
              className="carousel-caption"
              style={{ transform: "translateY(-260%)" }}
            >
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/banner3.jpg"
              className="d-block img-fluid"
              alt="..."
            />
            {/* Adding text for captions */}
            <div
              className="carousel-caption"
              style={{ transform: "translateY(-260%)" }}
            >
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#Header-Slider"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#Header-Slider"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
