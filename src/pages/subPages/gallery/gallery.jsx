import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Swiper 모듈에서 Navigation 추가
import GalleryCategoryTabs from "./galleryCategoryTabs";
import LazyImage from "../../../LazyImg";
import Pagination from '../../../components/SubNoti/Pagination';
import GallerySearchBar from './gallerySearchBar';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // Swiper 네비게이션 CSS 추가

const Gallery = ({ images }) => {
  const { key } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGroup, setCurrentGroup] = useState(1);
  const [pageGroupSize, setPageGroupSize] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('title');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    setFilteredImages(images.filter(image => image.key === key && image.category === "축제사진"));
  }, [key, images]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPageGroupSize(4);
      } else {
        setPageGroupSize(5);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearch = () => {
    const searchFilteredImages = images.filter(image => image.key === key && image.category === "축제사진").filter(image => {
      if (searchField === 'title') {
        return image.title.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (searchField === 'content') {
        return image.content.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    });
    setFilteredImages(searchFilteredImages);
    setCurrentPage(1);
    setCurrentGroup(1);
  };

  const postsPerPage = 12;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredImages.slice(indexOfFirstPost, indexOfFirstPost + postsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousGroup = () => {
    if (currentGroup > 1) {
      setCurrentGroup(currentGroup - 1);
      setCurrentPage((currentGroup - 2) * pageGroupSize + 1);
    }
  };

  const handleNextGroup = () => {
    if (currentGroup * pageGroupSize < Math.ceil(filteredImages.length / postsPerPage)) {
      setCurrentGroup(currentGroup + 1);
      setCurrentPage(currentGroup * pageGroupSize + 1);
    }
  };

  const totalPageCount = Math.ceil(filteredImages.length / postsPerPage);

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
                modules={[Navigation]} // Autoplay와 Navigation 모듈 추가
                spaceBetween={20}
                centeredSlides={true}
                navigation // 네비게이션 활성화
                slidesPerView={3}
                loop={true}
                className="mainSwiper"
              >
                {filteredImages.slice(0, 5).map((image, index) => ( // 기본으로 5장만 보여줌
                  <SwiperSlide key={index} className="mainSlide">
                    <div>
                      <LazyImage
                        src={image.src}
                        alt={` ${index + 1}`}
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
            {currentPosts.map((image, index) => (
              <div className={`gridCard${index + 1} gImgCard`} key={index}>
                <Link to={`/gallery/detail/${image.id}`}>
                  <LazyImage
                    src={image.src}
                    alt={`${index + 1}`}
                  />
                  <div className="imageDetails">
                    <h3>{image.title}</h3>
                    <p>작성자: {image.author}</p>
                    <p className="content">{image.content}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPageCount={totalPageCount}
          currentGroup={currentGroup}
          pageGroupSize={pageGroupSize}
          onPageChange={handleClick}
          onPreviousGroup={handlePreviousGroup}
          onNextGroup={handleNextGroup}
        />
        <div className='pageBtnWrap writeBtn'>
            <Link to="/Gallery/category/create" className="subBtn notiWrite">글쓰기</Link>
        </div>
        <GallerySearchBar
          searchField={searchField}
          setSearchField={setSearchField}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />
      </section>
    </>
  );
};

export default Gallery;
