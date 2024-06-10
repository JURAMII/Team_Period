import '../gallery/gallery.css'
import Header from "../../../components/common/header/header";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules";
import SupTop from "../../../components/common/supTop";

const Gallery = () => {
  return (
    <>
      <div className="subTop subGalleryTop">
        <p className="subTopText">갤러리</p>
      </div>
      <section>
        <div className="galImgSec1">
            <div className="galImgSec1_inner">
                <div className="mainImgWrap">
                    <div className="mainImgSlide">
                        <div className='prev'>
                            <span></span>
                        </div>
                        <div className='next'>
                            <span></span>
                        </div>
                        <div className='slide1'></div>
                        <div className='slide2'></div>
                        <div className='slide3'></div>
                        <div className='slide4'></div>
                        <div className='slide5'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="galImgSec2">
            <div className="gridBox">
                <div className="gridCard"></div>
                <div className="gridCard"></div>
                <div className="gridCard"></div>
                <div className="gridCard"></div>
                <div className="gridCard"></div>
                <div className="gridCard"></div>
                <div className="gridCard"></div>
                <div className="gridCard"></div>
                <div className="gridCard"></div>
                <div className="gridCard"></div>
                <div className="gridCard"></div>
                <div className="gridCard"></div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
