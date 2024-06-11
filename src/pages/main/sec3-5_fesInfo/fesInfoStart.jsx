import './fesInfo.css'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// 메인 sec3

const FesInfoStart = () => {

    useEffect(() => {
        AOS.init(
            { duration: 1200,
              once: false,
              mirror: true,
              disable: window.innerWidth < 768,
            }
        );
        AOS.refresh();
      }, [])

    return(
        <section className="defaultContent infoStart fesInfoSec" data-aos="fade-up" ata-aos-anchor-placement="top-center">
            <h3>어둠 속 고궁</h3>
            <h4>빛으로 피어나다</h4>
            <div className='startWrap flex'>
            <h5>START</h5>
            <div className='infoArraw' data-aos="fade-down-left">
                <div></div>
                <div></div>
            </div>
            </div>
        </section>
    )
}

export default FesInfoStart