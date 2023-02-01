import React from "react";
import { createGlobalStyle } from "styled-components";
import "../../assets/new_light_styles.scss";
import Footer1 from "../components/footer1";
import MyCustomSlider from "../components/MyCustomSlider";
import { Link } from "@reach/router";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";
import { navigate } from "@reach/router";
import TermsOfUse from "../../";
import { BsArrowRight } from "react-icons/bs";
// import  document from "../../../src/assets/img/document.jpg";
const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    border-bottom: none;
    background: #fff !important;
    .navbar-logo-white{
      display: none !important;
    }
    .navbar-logo-pink{
      display: block !important;
    }
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #fff;
      .navbar-logo-white{
        display: block !important;
      }
      .navbar-logo-pink{
        display: none !important;
      }
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
  .about-image{
    padding-bottom: 0.5rem;
  }
  .about-image img{   
    width: 95%;
    height: auto;
    margin: auto;
    border-radius: 30px;
    -webkit-transform: translateX(0px);
    -ms-transform: translateX(0px);
    transform: translateX(0px);
    -webkit-animation: moreBtnAnim1 2s linear infinite;
    animation: moreBtnAnim1 2s linear infinite;
  }
`;

const bg1 = {
  backgroundImage: "url('/img/background/header-bg.webp')",
};

const settings1 = {
  autoplay: true,
  accessibility: false,
  arrows: false,
  speed: 1000,
  lazyLoad: true,
  draggable: false,
  pauseOnHover: false,
  slidesToShow: 4,
  dots: true,
  height: "400px",
  responsive: [
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],

  onLazyLoad: () => {
    return <div>loading</div>;
  },
};


const fileDownload = (filePath)=>{
  window.open(filePath,"_blank");
}

const AboutUs = () => {
  return (
    <div>
      <GlobalStyles />
      <section className="container top-hero-header mt-1 pb-5">
        <div
          className="content-right d-flex top-header-card-container mt-5"
          style={bg1}
        >
          <MyCustomSlider />
        </div>
      </section>

      <div className="privacy-section">
        <div className="container ">
          <h1 className="second-title">About us</h1>
          <p className="fs-20">
            Become a part of the technological revolution looming in the world
            of NFT domains with Braands.io. Bringing the possibilities of NFTs
            to the general public.
          </p>
        </div>

        <section className="section-about" style={{ padding: "0px" }}>
          <div className="container">
            <section className="pt-5 pb-0">
              <div className="row about-content">
                <div className="col-lg-6">
                  <div className="about-image">
                    <img
                      style={{ height: "100%" }}
                      src="/img/about-brands.jpg"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                    <h2 className="fs-40" style={{ textAlign: "left" }}>
                      About Braands.io
                    </h2>
                    <p className="fs-20" style={{ textAlign: "left" }}>
                      Become a part of the technological revolution looming in
                      the world of NFT domains with Braands.io. Bringing the
                      possibilities of NFTs to the general public, we make it
                      possible for anyone to buy and own generic and NFT
                      domains. What’s more interesting is that you can mint the
                      domains, especially premium NFT domains, into many
                      fractions as you buy them, put them on auction, and trade
                      them for a profit. This way, other users can also own a
                      fraction of the premium NTF domains,
                    </p>
                    <p className="fs-20" style={{ textAlign: "left" }}>
                      which are expensive to buy for any single user, since it
                      allows fractional ownership. Further, with Braands.io, it
                      is possible to create unique and domain-specific logos as
                      the identity of the domains bought.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="pb-0">
              <div className="row pt-5 about-content">
                <div className="col-lg-6">
                  <div style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                    <h2 className="fs-40" style={{ textAlign: "left" }}>
                      Company Policy
                    </h2>
                    <p className="fs-20" style={{ textAlign: "left" }}>
                      Become a part of the technological revolution looming in
                      the world of NFT domains with Braands.io. Bringing the
                      possibilities of NFTs to the general public, we make it
                      possible for anyone to buy and own generic and NFT
                      domains. What’s more interesting is that you can mint the
                      domains, especially premium NFT domains, into many
                      fractions as you buy them, put them on auction, and trade
                      them for a profit.
                    </p>
                    <p className="fs-20" style={{ textAlign: "left" }}>
                      This way, other users can also own a fraction of the
                      premium NTF domains, which are expensive to buy for any
                      single user, since it allows fractional ownership.
                      Further, with Braands.io, it is possible to create unique
                      and domain-specific logos as the identity of the domains
                      bought.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-image">
                    <img
                      style={{ height: "100%" }}
                      src="/img/privacy-policy-1.jpg"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="pb-0">
              <div className="d-flex justify-content-center">
                <div className="container">
                  <h1 className="title-new mb-5 heading-bg-light-pink">
                    Documents
                  </h1>
                  <p className="fs-20">
                    Become a part of the technological revolution looming in the
                    world of NFT domains with Braands.io. Bringing the
                    possibilities of NFTs to the general public.
                  </p>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="about-cards">
                  <div className="about-card">
                    <img
                      src="/img/white-paper-carrer.jpg"
                      className="about-card__image"
                      alt=""
                    />

                    <div className="about-card__overlay">
                      <div className="about-card__header">
                        <svg
                          className="about-card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <BsArrowDownShort
                          color="#ffff"
                          className="about-card__thumb cursor-pointer about-btn-capsule"
                          onClick={()=>{fileDownload('/files/TERMS-OF-USE.pdf')}}
                        >
                        </BsArrowDownShort>
                        <div className="about-card__header-text">
                          <h3 className="about-card__title">Terms Of Use</h3>
                          <span className="about-card__status">Download</span>
                        </div>
                      </div>
                      <p className="about-card__description">
                        Lorem ipsum dolor sit amet consectetur
                      </p>
                    </div>
                  </div>
                  <div className="about-card">
                    <img
                      src="/img/finance-carrer.jpg"
                      className="about-card__image"
                      alt=""
                    />
                    <div className="about-card__overlay">
                      <div className="about-card__header">
                        <svg
                          className="about-card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <BsArrowDownShort
                          color="#fff"
                          className="about-card__thumb about-btn-capsule"
                          style={{ backgroundColor: "#ececec" }}
                          // onClick={()=>{fileDownload('/files/TERMS-OF-USE.pdf')}}
                        />
                        <div className="about-card__header-text">
                          <h3 className="about-card__title">
                            Annual Statement
                          </h3>
                          <span className="about-card__status">
                            Annual statement to be declared in March
                          </span>
                        </div>
                      </div>
                      <p className="about-card__description">
                        {/* Lorem ipsum dolor sit amet consectetur sdome saojere
                        some */}
                      </p>
                    </div>
                  </div>
                  <div className="about-card">
                    <img
                      src="/img/KYC-carrer.jpg"
                      className="about-card__image"
                      alt=""
                    />
                    <div className="about-card__overlay">
                      <div className="about-card__header">
                        <svg
                          className="about-card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <BsArrowDownShort
                          color="#ffff"
                          className="about-card__thumb cursor-pointer about-btn-capsule"
                          onClick={()=>{fileDownload('/files/AML_Policy.pdf')}}
                        />
                        <div className="about-card__header-text">
                          <h3 className="about-card__title">KYC/AML Policy</h3>
                          <span className="about-card__status">Download</span>
                        </div>
                      </div>
                      <p className="about-card__description">
                        Lorem ipsum dolor sit amet consectetur
                      </p>
                    </div>
                  </div>
                  <div className="about-card">
                    <img
                      src="/img/policy-carrer.jpg"
                      className="about-card__image"
                      alt=""
                    />
                    <div className="about-card__overlay">
                      <div className="about-card__header">
                        <svg
                          className="about-card__arc"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path />
                        </svg>
                        <BsArrowDownShort
                          color="#ffff"
                          className="about-card__thumb cursor-pointer about-btn-capsule"
                          onClick={()=>{fileDownload('/files/Privacy_Policy.pdf')}}
                        />
                        <div className="about-card__header-text">
                          <h3 className="about-card__title">Privacy Policy</h3>
                          <span className="about-card__status">Download</span>
                        </div>
                      </div>
                      <p className="about-card__description">
                        Lorem ipsum dolor sit amet consectetur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pb-0">
              <div className="row pt-5 about-content">
                <div className="col-lg-6">
                  <div style={{ paddingRight: "10px", paddingLeft: "10px" }}>
                    <h2 className="fs-40" style={{ textAlign: "left" }}>
                      Career
                    </h2>
                    <p className="fs-20" style={{ textAlign: "left" }}>
                      Become a part of the technological revolution looming in
                      the world of NFT domains with Braands.io. Bringing the
                      possibilities of NFTs to the general public, we make it
                      possible for anyone to buy and own generic and NFT
                      domains. What’s more interesting is that you can mint the
                      domains, especially premium NFT domains, into many
                      fractions as you buy them, put them on auction, and trade
                      them for a profit. This way, other users can also own a
                      fraction of the premium NTF domains,
                    </p>
                    <p className="fs-20" style={{ textAlign: "left" }}>
                      which are expensive to buy for any single user, since it
                      allows fractional ownership. Further, with Braands.io, it
                      is possible to create unique and domain-specific logos as
                      the identity of the domains bought.
                    </p>
                    <p style={{ textAlign: "left" }}>
                      <button
                        className="btn-main"
                      >
                        <BsArrowRight
                          className="read-more"
                          style={{ marginRight: "10px" }}
                        />
                        Apply Now
                      </button>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-image">
                    <img style={{ height: "100%" }} src="/img/career.jpg" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      <section
        className="pb-0"
        style={{ background: "white", paddingTop: "250px" }}
      >
        <Footer1 overlay={true} />
      </section>
    </div>
  );
};
export default AboutUs;
