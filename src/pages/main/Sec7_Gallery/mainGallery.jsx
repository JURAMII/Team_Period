// import "./mainGallery.css";

// // Import Swiper styles
// import "swiper/css";
// // import {Swiper} from 'React components';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import LazyImage from "../../../LazyImg";
// import { moonLightImages, starLightImages } from "../../../image";

// import { Link } from "react-router-dom";

// const MainGallery = () => { 
//   return (
//     <section className="mainGallery">
//       <h1>갤러리</h1>
//       <p>지금 바로 축제 사진을 확인해보세요!</p>
//       <div className="galleryBtn">
//         <button className="mainBtnSalomie">축제소개</button>
//         <button className="mainBtnSalomie">축제후기</button>
//       </div>
//       <div className="galleryslide">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={20}
//           centeredSlides={true}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//           }}
//           slidesPerView={"auto"}
//           speed={6000}
//           loop={true}
//           loopedslides={1}
//           loopAdditionalSlides={1}
//           onSwiper={(swiper) => console.log(swiper)}
//           className="mySwiper">
//           {starLightImages.map((image, index) => (
//             <SwiperSlide key={`${image.key}-${index}`}>
//               <Link to={`/Gallery/Detail/${index}`}>
//                 <LazyImage
//                   src={image.src}
//                   alt={`StarLightTour ${index + 1}`}
//                 />
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={20}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//             reverseDirection: true,
//           }}
//           slidesPerView={"auto"}
//           speed={6000}
//           loop={true}
//           loopedslides={1}
//           loopAdditionalSlides={1}
//           className="mySwiper">
//           {moonLightImages.map((image, index) => (
//             <SwiperSlide key={`${image.key}-${index}`}>
//               <Link to={`/Gallery/Detail/${index + starLightImages.length}`}>
//                 <LazyImage
//                   src={image.src}
//                   alt={`MoonLightTour ${index + 1}`}
//                 />
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default MainGallery;

import "./mainGallery.css";

// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import LazyImage from "../../../LazyImg";
import { galleryImages } from "../../../image";

import { Link } from "react-router-dom";

const MainGallery = () => {
  return (
    <section className="mainGallery">
      <h1>갤러리</h1>
      <p>지금 바로 축제 사진을 확인해보세요!</p>
      <div className="galleryBtn">
        {/* 축제소개 링크: 클릭 시 축제사진 페이지로 이동 */}
        <div className="mainBtnSalomie">
          <Link to="/Gallery/category/starLigth">축제사진</Link>
        </div>
        {/* 축제후기 링크: 클릭 시 축제후기 페이지로 이동 */}
        <div className="mainBtnSalomie">
          <Link to="/Gallery/category2/starLigth">축제후기</Link>
        </div>
      </div>
      <div className="galleryslide">
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints= {
            {
              1920: {
                slidesPerView: 5,
                spaceBetween: 0
              },
              1440: {
                slidesPerView: 'auto',
                spaceBetween: 20
              },
              1280: {
                slidesPerView: 'auto',
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 'auto',
                spaceBetween: 20
              },
              768: {
                slidesPerView: 'auto',
                spaceBetween: 20
              },
              500: {
                slidesPerView: 'auto',
                spaceBetween: 20
              }
            }
          }
          speed={6000}
          loop={true}
          loopedslides={1}
          loopAdditionalSlides={1}
          className="mySwiper">
          {/* galleryImages 배열에서 key가 'starLigth'인 이미지만 필터링하여 표시 */}
          {galleryImages.filter(image => image.key === 'starLigth').map((image, index) => (
            <SwiperSlide key={`${image.key}-${index}`}>
              <Link to={`/Gallery/Detail/${image.id}`}>
                <LazyImage
                  src={image.src}
                  alt={`StarLightTour ${index + 1}`}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints= {
            {
              1920: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
              1440: {
                slidesPerView: 'auto',
                spaceBetween: 20
              },
              1280: {
                slidesPerView: 'auto',
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 'auto',
                spaceBetween: 20
              },
              768: {
                slidesPerView: 'auto',
                spaceBetween: 20
              },
              500: {
                slidesPerView: 'auto',
                spaceBetween: 20
              }
            }
          }
          speed={6000}
          loop={true}
          loopedslides={1}
          loopAdditionalSlides={1}
          className="mySwiper">
          {/* galleryImages 배열에서 key가 'moonLight'인 이미지만 필터링하여 표시 */}
          {galleryImages.filter(image => image.key === 'moonLight').map((image, index) => (
            <SwiperSlide key={`${image.key}-${index}`}>
              <Link to={`/Gallery/Detail/${image.id}`}>
                <LazyImage
                  src={image.src}
                  alt={`MoonLightTour ${index + 1}`}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MainGallery;

