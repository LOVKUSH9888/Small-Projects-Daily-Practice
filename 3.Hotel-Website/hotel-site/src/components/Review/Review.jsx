import React from "react";
import "./Review.css";
import { LuMessagesSquare } from "react-icons/lu";
const Review = () => {
  return (
    <>
      <section id="review">
        <h1 className="text-center my-5">Reviews</h1>
        {/* Containers */}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
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
              <img src="../../../public/images/user1.jpg" alt="" />
            </div>
            <div className="col-md-4">
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
              <img src="../../../public/images/user1.jpg" alt="" />
            </div>
            <div className="col-md-4">
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
              <img src="../../../public/images/user1.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
