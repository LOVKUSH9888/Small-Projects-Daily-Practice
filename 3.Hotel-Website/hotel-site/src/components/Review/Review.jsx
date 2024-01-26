import React, { useEffect } from "react";
import "./Review.css";
import { LuMessagesSquare } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
const Review = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section id="review">
        <h1 data-aos="fade-right" className="text-center my-5">Reviews</h1>
        {/* Containers */}
        <div className="container">
          <div className="row">
            <div data-aos="fade-right" className=" col-md-4">
              <div className="review-box text-center">
                <LuMessagesSquare className="icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, tempora. Expedita, adipisci. Repellendus,
                  voluptate quidem! Hic placeat cupiditate sed mollitia
                  delectus, facere deleniti a accusantium nostrum eligendi
                  dolores, enim natus.
                </p>
                <h5>David Housan</h5>
                <small>Chandigarh</small>
              </div>
              <img src="../../../images/user1.jpg" alt="" />
            </div>
            <div data-aos="fade-up" className="col-md-4">
              <div className="review-box text-center">
                <LuMessagesSquare className="icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, tempora. Expedita, adipisci. Repellendus,
                  voluptate quidem! Hic placeat cupiditate sed mollitia
                  delectus, facere deleniti a accusantium nostrum eligendi
                  dolores, enim natus.
                </p>
                <h5>David Housan</h5>
                <small>Chandigarh</small>
              </div>
              <img src="../../../images/user2.jpg" alt="" />
            </div>
            <div data-aos="fade-left" className="col-md-4">
              <div className="review-box text-center">
                <LuMessagesSquare className="icon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, tempora. Expedita, adipisci. Repellendus,
                  voluptate quidem! Hic placeat cupiditate sed mollitia
                  delectus, facere deleniti a accusantium nostrum eligendi
                  dolores, enim natus.
                </p>
                <h5>David Housan</h5>
                <small>Chandigarh</small>
              </div>
              <img src="../../../images/user3.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
