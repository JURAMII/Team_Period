import "./mainGallery.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules";

import starLightTour1 from '../../../assets/starLightTour/starLightTour (1).jpg';
import starLightTour2 from '../../../assets/starLightTour/starLightTour (2).png';
import starLightTour3 from '../../../assets/starLightTour/starLightTour (3).jpg';
import starLightTour4 from '../../../assets/starLightTour/starLightTour (4).jpg';
import starLightTour5 from '../../../assets/starLightTour/starLightTour (5).jpg';
import starLightTour6 from '../../../assets/starLightTour/starLightTour (6).jpg';
import starLightTour7 from '../../../assets/starLightTour/starLightTour (7).jpg';
import starLightTour8 from '../../../assets/starLightTour/starLightTour (8).jpg';
import starLightTour9 from '../../../assets/starLightTour/starLightTour (9).jpg';
import starLightTour10 from '../../../assets/starLightTour/starLightTour (10).jpg';
import starLightTour11 from '../../../assets/starLightTour/starLightTour (11).jpg';
import starLightTour12 from '../../../assets/starLightTour/starLightTour (12).jpg';
import starLightTour13 from '../../../assets/starLightTour/starLightTour (13).jpg';
import starLightTour14 from '../../../assets/starLightTour/starLightTour (14).jpg';
import starLightTour15 from '../../../assets/starLightTour/starLightTour (15).png';

import moonLightTour1 from '../../../assets/moonlight/moonLightTour (1).png';
import moonLightTour2 from '../../../assets/moonlight/moonLightTour (2).jpg';
import moonLightTour3 from '../../../assets/moonlight/moonLightTour (3).jpg';
import moonLightTour4 from '../../../assets/moonlight/moonLightTour (4).jpg';
import moonLightTour5 from '../../../assets/moonlight/moonLightTour (5).png';
import moonLightTour6 from '../../../assets/moonlight/moonLightTour (6).png';
import moonLightTour7 from '../../../assets/moonlight/moonLightTour (7).png';
import moonLightTour8 from '../../../assets/moonlight/moonLightTour (8).png';
import moonLightTour9 from '../../../assets/moonlight/moonLightTour (9).jpg';
import moonLightTour10 from '../../../assets/moonlight/moonLightTour (10).jpg';
import moonLightTour11 from '../../../assets/moonlight/moonLightTour (11).png';
import moonLightTour12 from '../../../assets/moonlight/moonLightTour (12).png';
import moonLightTour13 from '../../../assets/moonlight/moonLightTour (13).jpg';
import moonLightTour14 from '../../../assets/moonlight/moonLightTour (14).png';
import moonLightTour15 from '../../../assets/moonlight/moonLightTour (15).jpg';

// 차후 이미지 폴더를 따로 만들 예정


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
              <img src={starLightTour1} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={starLightTour2} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={starLightTour3} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={starLightTour4} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={starLightTour5} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={starLightTour6} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={starLightTour7} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={starLightTour8} alt="" />
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
              <img src={moonLightTour1} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={moonLightTour2} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={moonLightTour3} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={moonLightTour4} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={moonLightTour5} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={moonLightTour6} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={moonLightTour7} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a>
              <img src={moonLightTour8} alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MainGallery;

