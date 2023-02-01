import { Link } from "@reach/router";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { BiRightArrowCircle } from "react-icons/bi";
import {
  BsPinterest,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaBehanceSquare } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

const GlobalStyles = createGlobalStyle`
.footer-pink{
  position: relative;
  padding-top: 100px;
}
video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 1 !important;
  transform: scale(1) !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}
.overlay-footer{
  background-image: url("/img/background/home-footer-overlay-bg.png");
  background-size: cover;
  border-radius: 35px;
  padding: 70px 30px;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%) translateY(0%);
  top: -250px;
  .search-outer{
    position: relative;
    input{
      width: 100%;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(32px);
      outline: none;
      border: none;
      border: 1px solid #F20D6B;
      border-radius: 400px;
      padding: 10px 20px;
      color: rgba(0, 0, 0, 0.5);
      font-weight: 500;
      font-size: 22px;
    }
    button {
      position: absolute;
      right: 5px;
      top: 5px;
      padding: 6px 20px;
      background: #F20D6B;
      border-radius: 200px;
      outline: none;
      border: none;
      color: #fff;
      font-size: 22px;
    }
  }
}
.overlay-footer-customer{
  background-size: cover;
  border-radius: 35px;
  padding: 70px 30px;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%) translateY(0%);
  top: -250px;
  max-height: 400px
}
@media only screen and (min-width:321px) and (max-width:768px) {
  .heading-overlay{
    font-size: 38px;
  }
}

@media only screen and (min-width:300px) and (max-width:400px) {
  .overlay-footer{
    .search-outer{
      input{
        font-size: 16px;
      }
      button {
        font-size: 16px;
      }
  }
  }
`;

const DefaultOverlaly = () => {
  return (
    <>
      <h1 className="heading-overlay">
        Build your ideal <br />
        brand today.
      </h1>
      <div className="search-outer mt-4">
        <input
          type="search"
          placeholder="Search here"
        />
        <button>
          Next <BiRightArrowCircle />
        </button>
      </div>
    </>
  );
};

const Footer1 = ({ overlay = null, Childeren, bg }) => {

  return (
    <>
      <GlobalStyles />

      <footer
        className={`footer-pink px-3 pb-4 ${!overlay ? "pt-4 mt-0" : ""}`}
      >
        {overlay && (
          <div
            className={`container  ${
              bg ? "overlay-footer-customer" : "overlay-footer"
            }`}
          >
            {Childeren ? (
              <Childeren />
            ) : (
              <DefaultOverlaly />
            )}
          </div>
        )}
        <video playsInline autoPlay muted loop>
          <source src="/img/video/braands-pink-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-center">
          <Link to="/" aria-label="Read more about Seminole tax hike">
            <img
              width="230"
              height="51"
              alt=""
              style={{ width: "230px" }}
              src="/img/braands_logo.png"
            />
          </Link>
          <p className="text-white mt-3">
            Unit of data stored on a digital ledger, called a blockchain, that
            certifies a digital asset.
          </p>
        </div>
        <div className="container my-4">
          <div
            className="menu text-white d-flex justify-content-center"
            style={{ gap: "40px" }}
          >
            <Link to="/">Home</Link>|<Link to="/about-us">About us</Link>|
            <Link to="/auction">Auction</Link>|<Link to="/trade">Trade</Link>|
            <a href="https://github.com/braands-io" target="_blank">
              Github
            </a>
            |<Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="container my-4">
          <div
            className="menu text-white d-flex justify-content-center"
            style={{ gap: "40px" }}
          >
            <a href="/careers">Career</a>|
            <a href="/files/TERMS-OF-USE.pdf" target="_blank">
              Terms of use
            </a>
            |
            <a href="/files/Privacy_Policy.pdf" target="_blank">
              Privacy Policy
            </a>
            |
            <a href="/files/AML_Policy.pdf" target="_blank">
              KYC/AML Policy
            </a>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="text-white mb-2">Subscribe for Daily Newsletter</p>
          <div className="d-flex justify-content-center">
            <div className="search-footer">
              <input
                type="text"
                className="search-box"
                placeholder="Email ID"
              />
              <button className="search-button">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="container mt-4">
          <div className="row align-items-center">
            <div className="col-md-6 mt-2">
              <div className="d-flex gap-4">
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/Braandsio"
                  target="_blank"
                  aria-label="facebook-icon"
                >
                  <AiFillFacebook color="#fff" fontSize={24} />
                </a>
                <a
                  rel="noreferrer"
                  href="https://twitter.com/braandsio"
                  target="_blank"
                  aria-label="twitter-icon"
                >
                  <BsTwitter color="#fff" fontSize={24} />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/braandsio"
                  target="_blank"
                  aria-label="instagram-icon"
                >
                  <BsInstagram color="#fff" fontSize={24} />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/braandsio"
                  target="_blank"
                  aria-label="linkedin-icon"
                >
                  <BsLinkedin color="#fff" fontSize={24} />
                </a>
                <a
                  rel="noreferrer"
                  href="https://in.pinterest.com/Braandsio"
                  target="_blank"
                  aria-label="pinintrest-icon"
                >
                  <BsPinterest color="#fff" fontSize={24} />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.behance.net/Braands"
                  target="_blank"
                  aria-label="behance-icon"
                >
                  <FaBehanceSquare color="#fff" fontSize={24} />
                </a>
                <a
                  rel="noreferrer"
                  href="https://medium.com/@Braands"
                  target="_blank"
                  aria-label="si-icon"
                >
                  <SiMedium color="#fff" fontSize={24} />
                </a>
              </div>
            </div>
            <div className="col-md-6 mt-2 text-end">
              <p className="mb-0 text-white">
                &copy; 2022 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="preloadImg">
        <div className="preloadImg__1"></div>
        <div className="preloadImg__2"></div>
        <div className="preloadImg__3"></div>
        <div className="preloadImg__4"></div>
        <div className="preloadImg__5"></div>
      </div>
    </>
  );
};

export default Footer1;
