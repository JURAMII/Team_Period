import "./mainGallery.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules";

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
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20} // 사이 간격
          centeredSlides={true}
          autoplay={{
            delay: 0, // 시간 설정
            disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 4, // 한번에 보여줄 갯수
            },
          }} // breakpoints 반응형 설정
          speed={6000} // 이미지 슬라이드 속도
          loop={true} // true 설정 시 무한반복
          loopedslides={1} // 증가할 사진 갯수
          loopAdditionalSlides={1} // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
          onSwiper={(swiper) => console.log(swiper)} // console에 swiper 정보 표기
          className="mySwiper">
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
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true // true로 설정하면 역방향 자동재생
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 4, // 한번에 보여줄 갯수
            },
          }}
          speed={6000}
          loop={true}
          loopedslides={1}
          loopAdditionalSlides={1}
          className="mySwiper">
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
      </div>
    </section>
  );
};

export default MainGallery;

