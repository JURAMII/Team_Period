// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { starLightImages, moonLightImages } from "../../../image"; // 이미지 파일 import
// import "./gallery.css";
// import Header from "../../../components/common/header/header";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import SupTop from "../../../components/common/supTop";
// import Twodep from "../../../components/twodep"

// const Gallery = () => {
//   // 선택된 카테고리를 저장하는 state를 만듭니다.
//   const [category, setCategory] = useState("별빛야행");

//   // 선택된 카테고리에 따라 이미지를 반환하는 함수입니다.
//   const getImages = () => {
//     if (category === "별빛야행") {
//       return starLightImages;
//     } else {
//       return moonLightImages;
//     }
//   };

//   const images = getImages(); // 현재 선택된 카테고리의 이미지를 가져옵니다.

//   return (
//     <>
//       <div className="subTop subGalleryTop">
//         <p className="subTopText">갤러리</p>
//       </div>
//       <section className="subGal">
//         <div className="ImgSwap">
//           <select
//             className="cate"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}>
//             <option>별빛야행</option>
//             <option>달빛기행</option>
//           </select>
//         </div>
//         <div className="galImgSec1">
//           <div className="galImgSec1_inner">
//             <div className="mainImgWrap">
//               <div className="mainImgSlide">
//                 <div className="slide">
//                   <div>
//                     <img src="" alt="" />
//                   </div>
//                 </div>
//                 <div className="slide">
//                   <div>
//                     <img src="" alt="" />
//                   </div>
//                 </div>
//                 <div className="slide">
//                   <div>
//                     <img src="" alt="" />
//                   </div>
//                 </div>
//                 <div className="slide">
//                   <div>
//                     <img src="" alt="" />
//                   </div>
//                 </div>
//                 <div className="slide">
//                   <div>
//                     <img src="" alt="" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="galImgSec2">
//           <div className="gridBox">
//             {images.slice(3).map((image, index) => (
//               <div className={`gridCard${index + 1} gImgCard`} key={index}>
//                 <Link to={`/Gallery/detail/${index}`}>
//                   <img src={image.src} alt={`썸네일 이미지 ${index + 1}`} />
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Gallery;

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { starLightImages, moonLightImages } from "../../../image"; // 이미지 파일 import
import "./gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import GalleryCategoryTabs from "./galleryCategoryTabs";

import "swiper/css";
import "swiper/css/autoplay";

const Gallery = () => {
  const { key } = useParams();

  // 선택된 카테고리에 따라 이미지를 반환하는 함수입니다.
  const getImages = () => {
    if (key === "starLigth") {
      return starLightImages;
    } else {
      return moonLightImages;
    }
  };

  const images = getImages(); // 현재 선택된 카테고리의 이미지를 가져옵니다.

  return (
    <>
      <div className="subTopGal subGalleryTop">
        <p className="subTopText">갤러리</p>
      </div>
      <section className="subGal">
        <GalleryCategoryTabs/>
        <div className="ImgSwap">
          <select
            className="cate"
            value={key}
            onChange={(e) => window.location.href = `/Team_Period/gallery/category/${e.target.value}`}>
            <option value="starLigth">별빛야행</option>
            <option value="moonLight">달빛기행</option>
          </select>
        </div>
        <div className="galImgSec1">
          <div className="galImgSec1_inner">
            <div className="mainImgWrap">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1280: {
                    slidesPerView: 3,
                  },
                }}
                loop={true}
                loopedslides={1}
                speed={1000}
                className="mainSwiper"
              >
                {images.slice(0, 5).map((image, index) => (
                  <SwiperSlide key={index} className="mainSlide">
                    <div>
                      <img src={image.src} alt={`메인 이미지 ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="galImgSec2">
          <div className="gridBox">
            {images.slice(3).map((image, index) => (
              <div className={`gridCard${index + 1} gImgCard`} key={index}>
                <Link to={`/gallery/detail/${image.id}`}>
                  <img src={image.src} alt={`썸네일 이미지 ${index + 1}`} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;




