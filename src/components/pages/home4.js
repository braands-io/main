import React, { Suspense } from "react";
import SliderMainParticleGrey from "../components/SliderMainParticleGrey1";
import { createGlobalStyle } from "styled-components";
import "../../assets/new_light_styles.scss";
import Footer1 from "../components/footer1";
import Slider from "react-slick";
import { useState } from "react";
import NumberCounter from "number-counter";
import { BsArrowRight } from "react-icons/bs";
import "../../assets/_swiper.scss";
const VideComponent = React.lazy(() => import("../VideComponent"));

const GlobalStyles = createGlobalStyle`
  .navbar{
    background: transparent;
  }
  .navbar.sticky.white{
    background: #fff !important;
    .navbar-logo-white{
      display: none;
    }
    .navbar-logo-pink{
      display: block;
    }
  }
  .col-white {
    color: #0d0c22;
    font-size: 70px;
    @media( max-width: 1200px ){
      font-size:50px;
    }
  }
  .de_count{
    h3{
      font-size: 36px;
      margin-bottom: 0;
      span {
        font-size: 36px;
      }
    }
  }
  .btn-main.inline.white{
    background: rgba(131,100,266, .2);
  }
  .yelbg{
    background-color: rgb(255, 249, 225);
  }
  .yelbg-2{
    background-color: rgb(247, 255, 231);
  }
  .greybg{
    background-color: rgb(246, 245, 251);
  }
  h2{
    font-size: 30px;
    margin-bottom: 20px;
    margin-top:0;
  }
  .pb60 {
    padding-bottom: 60px;
    padding-top: 60px;
  }
  .heading-bg-light-pink{
    position: relative;
    width: fit-content;
    &::after{
      content: '';
      position: absolute;
      top: 10px;
      right: -20px;
      background: rgba(255, 183, 212, 1);
      width: 170px;
      height: 50%;
      z-index: -1;
    }
  }
  @media (max-width:767px){
    .heading-bg-light-pink{
      &::after{
        top: 8px;
        right: -20px;
        background: rgba(255,183,212,1);
        width: 59%;
        height: 18px;
      }
    }
  }
  .heading-bg-green{
    position: relative;
    width: fit-content;
    &::after{
      content: '';
      position: absolute;
      bottom: 20px;
      right: 34px;
      background: rgba(44,231,145,1);
      width: 250px;
      height: 20%;
      z-index: -1;
    }
    @media(max-width:767px){
      &::after{
        width: 33%;
        height: 18px;
      }
    }
  }
  .no-bg{
    overflow: hidden;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 28.65%, rgba(255, 255, 255, 0.5) 72.4%, #FFFFFF 100%, #FFFFFF 100%, #FFFFFF 100%);
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: -2;
    transform: scale(1.3);
  }
  .section-3{
    overflow: hidden;
  }
  .new-item-cards{
    .slick-slide {
      padding: 0 10px;
    }
  }
  @media only screen and (min-width:321px) and (max-width:991px) {
    .col-white {
      font-size: 40px !important;
    }
    .ls-20{
      letter-spacing: 8px !important;
      font-size: 15px !important;
    }
  }
  .popular-domains{
    height: 370px;
  }
  .ls-20{
    letter-spacing: 10px;
    font-size: 25px;
  }
  .ms-10{
    margin-left: 10rem;
    @media(max-width:768px){
      margin-left: 7rem;
    }
    @media(max-width:568px){
      margin-left: 4rem;
    }
  }

  .domain-main-wrapper{
    possition:relative;
    height: auto !important;
    
    &::before{
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: linear-gradient(180deg, #C60F23 0%, #FFC4CA 100%);
      border-radius: 20px;
      z-index: -1;
    }
    &::after{
      content: '';
      position: absolute;
      left: 1px;
      right: 1px;
      top: 1px;
      bottom: 1px;
      background: linear-gradient(180deg, #FFFFFF 0%, #FFDADE 100%);
      z-index: -1;
      border-radius: 20px;
    }
    &.style1{
      &::before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(180deg, #EB6128 0%, #E8E85E 100%);
        border-radius: 20px;
        z-index: -1;
      }
      &::after{
        content: '';
        position: absolute;
        left: 1px;
        right: 1px;
        top: 1px;
        bottom: 1px;
        background: linear-gradient(180deg, #FFFFFF 0%, #FFF3C2 100%);
        z-index: -1;
        border-radius: 20px;
      }
    }
    &.style2{
      &::before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(180deg, #00C6F2 0%, #9644E4 100%);
        border-radius: 20px;
        z-index: -1;
      }
      &::after{
        content: '';
        position: absolute;
        left: 1px;
        right: 1px;
        top: 1px;
        bottom: 1px;
        background: linear-gradient(180deg, #FFFFFF 0%, #DB96FF 100%);
        z-index: -1;
        border-radius: 20px;
      }
    }
    &.style3{
      &::before{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(180deg, #C60F23 0%, #FFC4CA 100%);
        border-radius: 20px;
        z-index: -1;
      }
      &::after{
        content: '';
        position: absolute;
        left: 1px;
        right: 1px;
        top: 1px;
        bottom: 1px;
        background: linear-gradient(180deg, #FFFFFF 0%, #FFDADE 100%);
        z-index: -1;
        border-radius: 20px;
      }
    }
    
    -webkit-box-shadow: 0 2.4px 10px rgb(0 0 0 / 10%);
            box-shadow: 0 2.4px 10px rgb(0 0 0 / 10%);
  }
`;

const CompanyCards = ({ path, alt }) => {
  return (
    <div style={{ display: "flex" }}>
      <img className="ms-10" src={path} alt={alt} />
    </div>
  );
};

const Companieslider = ({ companies, settings }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const updateSettigs = {
    autoplay: true,
    accessibility: false,
    arrows: false,
    speed: 1000,
    infinite: true,
    lazyLoad: true,
    draggable: false,
    pauseOnHover: false,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: 0,
    dots: false,
    beforeChange: (current, next) => setSliderIndex(next),
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
          slidesToShow: 4,
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
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...updateSettigs} infinite={true}>
      {companies.map((ele, index) => (
        <CompanyCards path={ele.companyimg} alt={ele.copmanyName} key={index} />
      ))}
    </Slider>
  );
};

export default function Home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sliderIndex, setSliderIndex] = useState(0);
  const [newItemTab, setNewItemTab] = useState(1);
  const [newItemsAuctuion, setNewItemsAuctuion] = useState([]);
  const [newItemsTrade, setNewItemsTrade] = useState([]);
  const [loadingAuctions, setLoadingAuctions] = useState(true);
  const [loadingTrades, setloadingTrades] = useState(true);

  const settings = {
    autoplay: true,
    accessibility: false,
    arrows: false,
    speed: 1000,
    infinite: true,
    lazyLoad: true,
    draggable: false,
    pauseOnHover: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    dots: true,
    beforeChange: (current, next) => setSliderIndex(next),
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
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

  const companies = [
    { copmanyName: "comapany-1", companyimg: "/img/company/image-1.png" },
    { copmanyName: "company-2", companyimg: "/img/company/image-2.png" },
    { copmanyName: "company-3", companyimg: "/img/company/image-3.png" },
    { copmanyName: "compnay-4", companyimg: "/img/company/image-4.png" },
    { copmanyName: "compnay-5", companyimg: "/img/company/image-5.png" },
  ];
  return (
    <div>
      <video
        className="bgVideo no-bg"
        playsInline
        autoPlay
        muted
        loop
        width="101%"
      >
        <source src="/img/video/braands-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="siteLoader"></div>
      <GlobalStyles />
      {/* Section 1 */}
      <section
        className="position-relative jumbotron breadcumb mt-xl-herosec no-bg h-vh"
        style={{ zIndex: 1 }}
      >
        <SliderMainParticleGrey />
      </section>
      <section className="section-1-bg-outer">
        <section className="section-1-bg-inner"></section>
        <section className="section-1">
          <div className="container" style={{ overflow: "hidden" }}>
            <Companieslider settings={settings1} companies={companies} />
          </div>
        </section>
      </section>

      {/* Section 2 */}
      <section className="section-2">
        <p className="sub-title-new mb-0">Brands</p>
        <div className="d-flex justify-content-center">
          <h1 className="title-new mb-5 heading-bg-light-pink">New Items</h1>
        </div>
        <div className="menu">
          <ul>
            <li
              onClick={() => setNewItemTab(1)}
              className={newItemTab === 1 ? "active" : ""}
            >
              All
            </li>
            <li
              onClick={() => setNewItemTab(2)}
              className={newItemTab === 2 ? "active" : ""}
            >
              Auction
            </li>
            <li
              onClick={() => setNewItemTab(3)}
              className={newItemTab === 3 ? "active" : ""}
            >
              Trade
            </li>
          </ul>
        </div>
        <div className="container new-item-cards">
          <div className="row">
            <div className="col-lg-12">
              {newItemTab === 1 ? (
                <div className="row py-3">
                  <div className="text-center mt-5" style={{ height: "600px" }}>
                    <img
                      className="nothingfoundImage"
                      src="/img/nothing-found/nothing-found.svg"
                      alt="1234"
                      width="40%"
                      height="100%"
                    />
                  </div>
                </div>
              ) : newItemTab === 2 ? (
                <div className="row py-3">
                  <div className="text-center mt-5" style={{ height: "600px" }}>
                    <img
                      className="nothingfoundImage"
                      src="/img/nothing-found/nothing-found.svg"
                      alt="1234"
                      width="40%"
                      height="100%"
                    />
                  </div>
                </div>
              ) : (
                <div className="row py-3">
                  <div className="text-center mt-5" style={{ height: "600px" }}>
                    <img
                      className="nothingfoundImage"
                      src="/img/nothing-found/nothing-found.svg"
                      alt="1234"
                      width="40%"
                      height="100%"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-3 no-bg position-relative">
        <p className="sub-title-new mb-0">Domain Names</p>
        <div className="d-flex justify-content-center">
          <h1 className="title-new mb-5 heading-bg-green">
            Grab the world's most
            <br />
            popular domain.
          </h1>
        </div>
        <div className="container popular-domains">
          <div className="row align-items-center">
            <Slider {...settings}>
              {[
                { name: ".com", price: "14.50" },
                { name: ".in", price: "25.00" },
                { name: ".org", price: "14.00" },
                { name: ".io", price: "50.00" },
                { name: ".net", price: "16.00" },
              ].map((ele, index) => (
                <div
                  key={index}
                  className={`${index === sliderIndex
                    ? "item-card-pink"
                    : "mt-4 item-card-light"
                    }`}
                >
                  <h2 className="item-card-title">Domain{ele.name}</h2>
                  <p className="item-card-title-2">
                    <strong>
                      Get a {ele.name} for <br />${ele.price}
                    </strong>
                    / 1st yr.
                  </p>
                  <p>
                    Grab the world’s most popular domain. 2-year purchase
                    required additional year’s.
                  </p>
                  <button className="item-card-button">
                    Know More
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="section-1-bg-outer">
        <section className="section-1-bg-inner"></section>
        <section className="section-1">
          <div className="container d-flex justify-content-between number-row">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <img
                height="60"
                width="60"
                src="/img/icons/collections-white.svg"
                alt="wallet"
              />
              <div>
                <span
                  style={{ fontWeight: "700", fontSize: "18px" }}
                  className="mb-0 text-white"
                >
                  Collectibles
                </span>
                <NumberCounter
                  delay={1}
                  className="mb-0 h1 text-white"
                  start={94000}
                  end={94215}
                />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <img
                height="60"
                width="60"
                src="/img/icons/auction-white.svg"
                alt="wallet"
              />
              <div>
                <span
                  style={{ fontWeight: "700", fontSize: "18px" }}
                  className="mb-0 text-white"
                >
                  Auctions
                </span>
                <NumberCounter
                  postFix="K"
                  className="mb-0 h1 text-white"
                  end={27}
                />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <img
                height="60"
                width="60"
                src="/img/icons/nfts-man-white.svg"
                alt="wallet"
              />
              <div>
                <span
                  style={{ fontWeight: "700", fontSize: "18px" }}
                  className="mb-0 text-white"
                >
                  NFT Artist
                </span>
                <NumberCounter
                  postFix="K"
                  className="mb-0 h1 text-white"
                  end={2}
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="section-4 pt-0">
        <p className="sub-title-new mb-0">Process</p>
        <h1 className="title-new mb-5">How it Works</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="video-section" style={{ marginTop: "100px" }}>
                <Suspense fallback={<></>}>
                  <VideComponent
                    videoId={"_0hhgW4YCLs"}
                    title={
                      "What are NFTs? Simply Explained | Non-Fungible Token"
                    }
                    aspectRatio={{ height: "400", width: "560" }}
                  />
                </Suspense>
              </div>
            </div>
            <div className="col-lg-6 pt-4">
              <h2 className="fs-40">About Braands.io</h2>
              <p className="fs-20">
                Become a part of the technological revolution looming in the
                world of NFT domains with Braands.io. Bringing the possibilities
                of NFTs to the general public, we make it possible for anyone to
                buy and own generic and NFT domains. What’s more interesting is
                that you can mint the domains, especially premium NFT domains,
                into many fractions as you buy them, put them on auction, and
                trade them for a profit. This way, other users can also own a
                fraction of the premium NTF domains, which are expensive to buy
                for any single user, since it allows fractional ownership.
                Further, with Braands.io, it is possible to create unique and
                domain-specific logos as the identity of the domains bought.
              </p>
              <p className="fs-20">
                <button
                  className="btn-main"
                >
                  <BsArrowRight
                    className="read-more"
                    style={{ marginRight: "10px" }}
                  />
                  Read More
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="pb-0"
        style={{ background: "white", paddingTop: "250px" }}
      >
        <Footer1 type="pink" overlay={true} />
      </section>
    </div>
  );
}
