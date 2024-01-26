import React, { useEffect } from "react";
import "./Footer.css";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialSkype } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section id="footer">
        <div className="container text-white">
          <div className="row">
            <div  data-aos="fade-right" className="col-md-3">
              <h2>Logo</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus sed quo rem architecto aliquam cumque repudiandae
                excepturi aut omnis dignissimos nostrum unde modi neque, est
                explicabo assumenda atque obcaecati molestias!
              </p>
            </div>
            <div data-aos="fade-up" className="col-md-3">
              <h2>Features</h2>
              <ul>
                <li>Deals & Offers</li>
                <li>Customer Reviews</li>
                <li>Cancelation Policy</li>
              </ul>
            </div>
            <div data-aos="fade-up" className="col-md-3">
              <h2>Quick Contact</h2>
              <ul>
                <li> <FaPhone /> Deals & Offers</li>
                <li> <MdMarkEmailRead /> Customer Reviews</li>
                <li> <FaHome /> Cancelation Policy</li>
              </ul>
            </div>
            <div data-aos="fade-left" className="col-md-3">
              <h2>Follow Us on</h2>
              <ul>
                <li> <SlSocialLinkedin /> Deals & Offers</li>
                <li> <SlSocialSkype /> Customer Reviews</li>
                <li> <SlSocialTwitter /> Cancelation Policy</li>
              </ul>
            </div>
          </div>
          <hr />
          <p  data-aos="fade-right" className="text-center">Made by @Lovkush</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
