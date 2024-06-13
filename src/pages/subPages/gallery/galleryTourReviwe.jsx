// import { Link, useParams } from "react-router-dom";
// import "./gallery.css";
// import GalleryCategoryTabs from "./galleryCategoryTabs";

// import "swiper/css";
// import "swiper/css/autoplay";

// const GalleryReview = ({galleryImages}) => {
//   const { key } = useParams();

//   // 선택된 카테고리에 따라 이미지를 반환하는 함수입니다.
//   const getImages = () => {
//     if (key === "starLigth") {
//       return galleryImages.filter(image => image.key === "starLigth" && image.category2 === "축제후기");
//     } else {
//       return galleryImages.filter(image => image.key === "moonLight" && image.category2 === "축제후기");
//     }
//   };

//   const images = getImages(); // 현재 선택된 카테고리의 이미지를 가져옵니다.

//   return (
//     <>
//       <div className="subTopGal subGalleryTop">
//         <p className="subTopText">갤러리</p>
//       </div>
//       <section className="subGal">
//         <GalleryCategoryTabs/>
//         <div className="ImgSwap">
//           <select
//             className="cate"
//             value={key}
//             onChange={(e) => window.location.href = `/Team_Period/gallery/category2/${e.target.value}`}>
//             <option value="starLigth">별빛야행</option>
//             <option value="moonLight">달빛기행</option>
//           </select>
//         </div>
//         <div className="galImgSec2">
//           <div className="gridBox">
//             {images.map((image, index) => (
//               <div className={`gridCard${index + 1} gImgCard`} key={index}>
//                 <Link to={`/gallery/detail/${image.id}`}>
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

// export default GalleryReview;

import { Link, useParams } from "react-router-dom";
import "./gallery.css";
import GalleryCategoryTabs from "./galleryCategoryTabs";

import "swiper/css";
import "swiper/css/autoplay";

const GalleryReview = ({ images, onDelete }) => {
  const { key } = useParams();

  // 선택된 카테고리에 따라 이미지를 반환하는 함수입니다.
  const getImages = () => {
    if (key === "starLigth") {
      return images.filter(image => image.key === "starLigth" && image.category2 === "축제후기");
    } else {
      return images.filter(image => image.key === "moonLight" && image.category2 === "축제후기");
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
            onChange={(e) => window.location.href = `/Team_Period/gallery/category2/${e.target.value}`}>
            <option value="starLigth">별빛야행</option>
            <option value="moonLight">달빛기행</option>
          </select>
        </div>
        <div className="galImgSec2">
          <div className="gridBox">
            {filteredImages.map((image, index) => (
              <div className={`gridCard${index + 1} gImgCard`} key={index}>
                <Link to={`/gallery/detail2/${image.id}`}>
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

export default GalleryReview;

