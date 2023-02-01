import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/_swiper.scss";

const item = {
  item1: "/img/home-slider/1.svg",
  item2: "/img/home-slider/2.svg",
  item3: "/img/home-slider/3.svg",
  item4: "/img/home-slider/4.svg",
  item5: "/img/home-slider/5.svg",
  item6: "/img/home-slider/6.svg",
  item7: "/img/home-slider/7.svg",
  item8: "/img/home-slider/8.svg",
  item9: "/img/home-slider/9.svg"
};

export default function MyCustomSlider() {
  return (
    <>
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
          <div className="item bg-1">
            <img src={item.item1} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-2">
            <img src={item.item7} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-1">
            <img src={item.item4} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-2">
            <img src={item.item9} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
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
          <div className="item bg-2">
            <img src={item.item2} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-1">
            <img src={item.item8} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-2">
            <img src={item.item5} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-1">
            <img src={item.item2} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-2">
            <img src={item.item8} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
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
          <div className="item bg-1">
            <img src={item.item3} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-2">
            <img src={item.item9} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-1">
            <img src={item.item6} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-2">
            <img src={item.item1} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
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
          <div className="item bg-2">
            <img src={item.item4} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-1">
            <img src={item.item1} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-2">
            <img src={item.item7} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-1">
            <img src={item.item8} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-2">
            <img src={item.item5} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
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
          <div className="item bg-1">
            <img src={item.item5} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-2">
            <img src={item.item2} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-1">
            <img src={item.item8} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-2">
            <img src={item.item4} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
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
          <div className="item bg-2">
            <img src={item.item6} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-1">
            <img src={item.item3} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-2">
            <img src={item.item9} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-1">
            <img src={item.item7} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item bg-2">
            <img src={item.item1} alt="Monteno" />
            <div className="item-footer">
              <div>
                USD <h3 className="mb-0">99</h3>
              </div>
              <button className="view-detail-btn">View Detail</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
