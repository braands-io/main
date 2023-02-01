import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/_swiper.scss";
import { useState } from "react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const item = {
  item1: "/img/home-slider/1.svg",
  item2: "/img/home-slider/2.svg",
  item3: "/img/home-slider/3.svg",
  item4: "/img/home-slider/4.svg",
  item5: "/img/home-slider/5.svg",
  item6: "/img/home-slider/6.svg",
  item7: "/img/home-slider/7.svg",
  item8: "/img/home-slider/8.svg",
  item9: "/img/home-slider/9.svg",
  item10: "/img/home-slider/4.svg",
  item12: "/img/home-slider/8.svg",
  item13: "/img/home-slider/1.svg",
  item14: "/img/home-slider/2.svg",
  item15: "/img/home-slider/3.svg",
  item16: "/img/home-slider/4.svg",
  item17: "/img/home-slider/3.svg",
  item18: "/img/home-slider/6.svg",
  item19: "/img/home-slider/8.svg",
  item20: "/img/home-slider/1.svg",
};

const Slidermainparticle = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="container mt-md-herosec" style={{ zIndex: "10" }}>
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <div className="spacer-single"></div>
          <h6>
            <span className="text-uppercase ls-20">Braands Market</span>
          </h6>
          <Reveal className="onStep" keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
            <h1 className="col-white">
              Discover Collect & Sell <img height="57"  width="140" style={{ marginTop: '-10px' }} src='/img/background/home-hero-heading-icon.png' alt='hero-icon' /> Fractional <span className="color"> {
                "NFTs" 
              }.</span>
            </h1>
          </Reveal>
          <form
            id="form_search_big"
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="d-flex align-items-center mb-3"
            name="form_search_big">
            <div className="position-relative flex-grow-1">
              <input
                className="form-control mb-0"
                id="text_search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                name="text_search"
                placeholder="Search Brand"
                type="text"
              />
              <button type="submit" className="border-0" id="btn-submit">
                <img src="/img/icons/search-icon.svg" className="h-100" alt="search" />
              </button>
              <div className="clearfix"></div>
            </div>
          </form>
          <div className="spacer-10"></div>
        </div>
        <div className="col-md-6 col-12">
          <div className="content-right d-flex mt-4">
            <Swiper
              modules={[Autoplay]}
              direction={"vertical"}
              spaceBetween={30}
              slidesPerView={3}
              loop
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={1000}>
              <SwiperSlide>
                <div className="item bg-1 cursor-pointer">
                  <img src={item.item1} alt="Monteno" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bg-2 cursor-pointer">
                  <img src={item.item2} alt="Monteno" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bg-1">
                  <img src={item.item3} alt="Monteno" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bg-2 cursor-pointer">
                  <img src={item.item4} alt="Monteno" />
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              modules={[Autoplay]}
              direction={"vertical"}
              spaceBetween={30}
              slidesPerView={3}
              loop
              autoplay={{
                delay: 1,
                reverseDirection: true,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={1000}>
              <SwiperSlide>
                <div className="item bg-2 cursor-pointer" >
                  <img src={item.item5} alt="Monteno" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bg-1 cursor-pointer">
                  <img src={item.item6} alt="Monteno" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bg-2 cursor-pointer">
                  <img src={item.item7} alt="Monteno" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bg-1 cursor-pointer">
                  <img src={item.item8} alt="Monteno" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bg-2 cursor-pointer">
                  <img src={item.item9} alt="Monteno" />
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              modules={[Autoplay]}
              direction={"vertical"}
              spaceBetween={30}
              slidesPerView={3}
              loop
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={1000}>
              <SwiperSlide>
                <div className="item bg-2 cursor-pointer">
                  <img src={item.item10} alt="Monteno" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bg-1 cursor-pointer">
                  <img src={item.item12} alt="Monteno" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bg-2 cursor-pointer">
                  <img src={item.item13} alt="Monteno" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bg-1 cursor-pointer">
                  <img src={item.item14} alt="Monteno" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item bg-2 cursor-pointer">
                  <img src={item.item18} alt="Monteno" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidermainparticle;
