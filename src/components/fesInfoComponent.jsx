import '../pages/main/sec3-5_fesInfo/fesInfo.css'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FesInfoComponent = ({fTitle1, fTitle2, fText1, fText2, fImg, fCla}) => {

    useEffect(() => {
        AOS.init(
            { duration: 1200,
              once: false,
              mirror: true,
            }
        );
        AOS.refresh();
      }, [])
    
    return(    
    <section className='defaultContent fesInfoSec fesInfoSec2'>
        <div className={`flex fesInfoWrap ${fCla}`} data-aos="fade-up">
        <div><img src={fImg} alt="포스터"/></div>
        <div className='fesInfoTxt'>
            <div>
            <h2>{fTitle1}</h2>
            <h2>{fTitle2}</h2>
            </div>
            <div>
            <p>{fText1}</p>
            <p>{fText2}</p>
            </div>
            <div className='fesInfoBtnWrap flex'>
            <input className="mainBtnSalomie fesInfoBtn" type ="button" value="자세히 보기"/>
            </div>
        </div>
       </div>
    </section>
    )
}

export default FesInfoComponent