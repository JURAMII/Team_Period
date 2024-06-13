// import { Link, useParams } from "react-router-dom";
// import "./gallery.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import GalleryCategoryTabs from "./galleryCategoryTabs";
// import LazyImage from "../../../LazyImg";

// import "swiper/css";
// import "swiper/css/autoplay";

// const Gallery = ({galleryImages}) => {
//   const { key } = useParams();

//   // 선택된 카테고리에 따라 이미지를 반환하는 함수입니다.
//   const getImages = () => {
//     if (key === "starLigth") {
//       return galleryImages.filter(
//         (image) => image.key === "starLigth" && image.category === "축제사진"
//       );
//     } else {
//       return galleryImages.filter(
//         (image) => image.key === "moonLight" && image.category === "축제사진"
//       );
//     }
//   };

//   const images = getImages(); // 현재 선택된 카테고리의 이미지를 가져옵니다.

//   return (
//     <>
//       <div className="subTopGal subGalleryTop">
//         <p className="subTopText">갤러리</p>
//       </div>
//       <section className="subGal">
//         <GalleryCategoryTabs />
//         <div className="ImgSwap">
//           <select
//             className="cate"
//             value={key}
//             onChange={(e) =>
//               (window.location.href = `/Team_Period/gallery/category/${e.target.value}`)
//             }>
//             <option value="starLigth">별빛야행</option>
//             <option value="moonLight">달빛기행</option>
//           </select>
//         </div>
//         <div className="galImgSec1">
//           <div className="galImgSec1_inner">
//             <div className="mainImgWrap">
//               <Swiper
//                 modules={[Autoplay]}
//                 spaceBetween={20}
//                 autoplay={{
//                   delay: 0,
//                   disableOnInteraction: false,
//                 }}
//                 breakpoints={{
//                   768: {
//                     slidesPerView: 2,
//                   },
//                   1280: {
//                     slidesPerView: 3,
//                   },
//                 }}
//                 loop={true}
//                 loopedslides={1}
//                 speed={6000}
//                 className="mainSwiper">
//                 {images.slice(0, 5).map((image, index) => (
//                   <SwiperSlide key={index} className="mainSlide">
//                     <div>
//                       <LazyImage
//                         src={image.src}
//                         alt={`MoonLightTour ${index + 1}`}
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//         <div className="galImgSec2">
//           <div className="gridBox">
//             {images.map((image, index) => (
//               <div className={`gridCard${index + 1} gImgCard`} key={index}>
//                 <Link to={`/gallery/detail/${image.id}`}>
//                   <LazyImage
//                     src={image.src}
//                     alt={`MoonLightTour ${index + 1}`}
//                   />
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

import React from "react";
import { Link, useParams } from "react-router-dom";
import "./gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import GalleryCategoryTabs from "./galleryCategoryTabs";
import LazyImage from "../../../LazyImg";
import "swiper/css";
import "swiper/css/autoplay";

const Gallery = ({ images, onDelete }) => {
  const { key } = useParams();

  // 선택된 카테고리에 따라 이미지를 반환하는 함수입니다.
  const getImages = () => {
    if (key === "starLigth") {
      return images.filter(
        (image) => image.key === "starLigth" && image.category === "축제사진"
      );
    } else {
      return images.filter(
        (image) => image.key === "moonLight" && image.category === "축제사진"
      );
    }
  };

  const filteredImages = getImages(); // 현재 선택된 카테고리의 이미지를 가져옵니다.

  return (
    <>
      <div className="subTopGal subGalleryTop">
        <p className="subTopText">갤러리</p>
      </div>
      <section className="subGal">
        <GalleryCategoryTabs />
        <div className="ImgSwap">
          <select
            className="cate"
            value={key}
            onChange={(e) =>
              (window.location.href = `/Team_Period/gallery/category/${e.target.value}`)
            }
          >
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
                autoplay={{
                  delay: 0,
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
                speed={6000}
                className="mainSwiper"
              >
                {filteredImages.slice(0, 5).map((image, index) => (
                  <SwiperSlide key={index} className="mainSlide">
                    <div>
                      <LazyImage
                        src={image.src}
                        alt={`MoonLightTour ${index + 1}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="galImgSec2">
          <div className="gridBox">
            {filteredImages.map((image, index) => (
              <div className={`gridCard${index + 1} gImgCard`} key={index}>
                <Link to={`/gallery/detail/${image.id}`}>
                  <LazyImage
                    src={image.src}
                    alt={`MoonLightTour ${index + 1}`}
                  />
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
