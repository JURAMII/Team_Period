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
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={15}
                            autoplay={{
                                delay:0,
                                disableOnInteraction: false,
                            }}
                            speed={8000}
                            loop={true}
                            breakpoints={{
                                1920: {
                                    slidesPerView: 5
                                },
                                1024: {
                                    slidesPerView: 3
                                },
                                768: {
                                    slidesPerView: 1
                                }
                            }}
                        >
                            <SwiperSlide>
                                <div><img src="" alt="" /></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div><img src="" alt="" /></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div><img src="" alt="" /></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div><img src="" alt="" /></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div><img src="" alt="" /></div>
                            </SwiperSlide>
                        </Swiper>
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
