import LineTit from '../../../components/lineTit';
import OneDep from '../../../components/onedep';
import KakaoMap from './map2';
import './Way.css'

const Way2 = ()=>{

    return(
        <section className='subDefaultContent'>
            <article>
            <OneDep subtit1={'오시는길'} subtit2={'주변안내'}/>
            <LineTit subtit={'오시는길'}/>   
            <div className='kakao flex'>     
                <KakaoMap />     
                <ul>
                    <li><img src="./icons8-location-96.png" alt="location icon" /><b>주소</b>
                    <p>(03072) 서울 종로구 율곡로 99</p>
                    </li>
                    <li><img src="./icons8-call-100.png" alt="phone icon" /><b>연락처</b>
                    <p>대표전화 02-3668-2300 </p>
                    <p>팩스 02-762-2070</p>
                    </li>
                </ul>
            </div>
            <ul className='transport flex'>
                    <li>
                        <img src="icons8-subway-100.png" alt="subway icon" />
                        <ul className='tr_txt'>
                            <li><b>지하철 이용시</b></li>
                            <li>3호선 안국역 3번 출구 도보 5분</li>
                            <li>1·3·5호선 종로3가역 7번 출구 도보 10분</li>
                        </ul>
                    </li>
                    <li className='leftLine'>
                        <img src="icons8-bus-100.png" alt="bus icon" />
                        <ul className='tr_txt'>
                            <li><b>버스 이용시</b></li>
                            <li>서울돈화문국악당 하차<br />
                            간선 109, 151, 162, 171, 172, 272, 710<br />
                            지선 7025</li>
                        </ul>
                    </li>
                    <li className='leftLine'><img src="icons8-car-96.png" alt="car icon" />
                    <ul className='tr_txt'>
                            <li><b>자가용 이용시</b></li>
                            <li>창덕궁
                                <p className='red'>*주차시설이 없으니 대중교통을 이용하시기 바랍니다.</p>
                            </li>
                        </ul>
                        </li>
            </ul>
            </article>
        </section>
    )

}

export default Way2;