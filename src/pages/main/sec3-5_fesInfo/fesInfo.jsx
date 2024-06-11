import './fesInfo.css'
import {Kposter, Cposter} from '../../subPages/fesInfo/fesInfoimgs'

import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 메인 페이지 sec4-5

const FesInfoComponent = ({fTitle1, fTitle2, fText1, fText2, fImg, fCla, fLink}) => {

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
            <Link to={fLink}><input className="mainBtnSalomie fesInfoBtn" type ="button" value="자세히 보기"/></Link>
            </div>
        </div>
       </div>
    </section>
    )
}


const FesInfo = () => {


    let fesInfoConts = [
        {
            fTitle1:`경복궁`,
            fTitle2:`별빛야행`,
            fText1: `별 가득한밤,`,
            fText2: `경복궁 별빛야행에 여러분을 초대합니다.`,
            fImg: Kposter,
            id:'1',
            fCla:'fesInfo1',
            fLink: '/Kinfo'
        },
        {
            fTitle1: `창덕궁`,
            fTitle2: `달빛기행`,
            fText1: `은은한 달빛 아래,`,
            fText2: `창덕궁 달빛기행에 여러분을 초대합니다.`,
            fImg: Cposter,
            id:'2',
            fCla:'fesInfo2',
            fLink:'/Cinfo'
        },
    ]
    return(
        <>
        {fesInfoConts.map((fesInfoCont)=><FesInfoComponent key={fesInfoCont.id} {...fesInfoCont}/>)}
        </>
    )
}

export default FesInfo