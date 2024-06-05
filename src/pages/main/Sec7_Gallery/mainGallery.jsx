import "./mainGallery.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const MainGallery = () => {
  return (
    <section className="mainGallery">
      <h1>갤러리</h1>
      <p>지금 바로 축제 사진을 확인해보세요!</p>
      <div className="galleryBtn">
        <button className="mainBtnSalomie">축제소개</button>
        <button className="mainBtnSalomie">축제후기</button>
      </div>
      <div className="galleryslide">
        {/* <ul className="gSlideWrap">
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src="" alt="" />
                            </a>
                        </li>
                    </ul> */}
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          slidesPerView={5}
          autoplay={{
            delay: 0.5,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          pagination={{
            clickable: true,
          }}
          waitForTransition={true}
          modules={[Autoplay]}
          className="mySwiper"
          >
          <SwiperSlide>
            <a>
              <img src="" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src="" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src="" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src="" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src="" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src="" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src="" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src="" alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
        <div>
          <ul className="gSlideWrap">
            <li>
              <a>
                <img src="" alt="" />
              </a>
            </li>
            <li>
              <a>
                <img src="" alt="" />
              </a>
            </li>
            <li>
              <a>
                <img src="" alt="" />
              </a>
            </li>
            <li>
              <a>
                <img src="" alt="" />
              </a>
            </li>
            <li>
              <a>
                <img src="" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainGallery;
