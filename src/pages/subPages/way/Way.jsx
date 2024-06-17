import { Link } from 'react-router-dom';
import { useState } from 'react';
import LineTit from '../../../components/lineTit';
import Map from './map';
import Map2 from './map2'
import SupTop from '../../../components/common/supTop';
import '../../../components/onedep.css'
import '../../../components/twodep.css'
import './Way.css'


const Way = ()=>{
    const [oneDep, setOneDep] = useState(1);
    
    function clickOne(index){
        setOneDep(index);
    }  

    const [twoDep, setTwoDep] = useState(1);
    
    function clickOne(index){
        setTwoDep(index);
    }  
    return(
        <>
        <SupTop supTopImg={'subTourInfoTop'} supTopTit={'관광안내'}/>
        {/* 원뎁스 */}
        <ul className="oneDep flex subDefaultContent">
         <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to='/Way'>오시는길</Link></li>
         <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}><Link to='/ResLi/category/res'>주변안내</Link></li>
        </ul>
        {/* 투뎁스 */}
        <ul className="twoDep flex">
        <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(1)}><Link to='/Way'>경복궁 별빛야행</Link></li>
        <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(2)}><Link to='/Way2'>창덕궁 달빛기행</Link></li>
        </ul>

        <section className='subDefaultContent'>
            <article>
            <LineTit subtit={'오시는길'}/>
            <div className='kakao flex'>     
                <Map />     
                <ul>
                    <li><img src="./icons8-location-96.png" alt="location icon" /><b>주소</b>
                    <p>(03045) 서울 종로구 사직로 161</p>
                    </li>
                    <li><img src="./icons8-call-100.png" alt="phone icon" /><b>연락처</b>
                    <p>대표전화 02-3700-3900 </p>
                    <p>팩스 02-3700-3909</p>
                    </li>
                </ul>
            </div>
            <ul className='transport flex'>
                    <li>
                        <img src="icons8-subway-100.png" alt="subway icon" />
                        <ul className='tr_txt'>
                            <li><b>지하철 이용시</b></li>
                            <li>3호선 경복궁역 5번 출구  도보 2분</li>
                            <li>3호선 안국역 1번출구  도보 6분</li>
                            <li>5호선 광화문역 2번 출구  도보 6분</li>
                        </ul>
                    </li>
                    <li className='leftLine'>
                        <img src="icons8-bus-100.png" alt="bus icon" />
                        <ul className='tr_txt'>
                            <li><b>버스 이용시</b></li>
                            <li>경복궁 하차<br />
                            간선 109, 171, 272, 601, 606, 710<br/>
                                지선 1020, 7025</li>
                            <li>덕성여중고 하차<br/>
                            간선 171, 272, 401, 406, 704, 710<br />
                            지선 1020, 7025</li>
                        </ul>
                    </li>
                    <li className='leftLine'><img src="icons8-car-96.png" alt="car icon" />
                    <ul className='tr_txt'>
                            <li><b>자가용 이용시</b></li>
                            <li>내비게이션  경복궁 <br />또는  경복궁주차장</li>
                        </ul>
                        </li>
            </ul>
            </article>
            <article>
                <LineTit subtit={'주차안내'}/>
                <div className='parkingWrap'>
                    <img src="./map_gyeongbokgung.png" alt="parking map" />
                    <p>
                    경복궁주차장은 ㈜아마노코리아에서 위탁 관리하는 경복궁 부설주차장입니다.<br />
                    문의사항은 주차장관리사무소(02-736-9536)로 연락주시기 바랍니다.
                    </p>
                    <p>광화문에서 삼청동 가는 길 초입 좌측편에 위치</p>
                    <p>버스 50대(지상), 승용차 240대(지하)</p>
                    <b>유의사항</b>
                    <ul className='parking'>
                            <li>주차장 운영시간: 06:00 ~ 23:00</li>
                            <li>장애인주차장: 지상주차장(9면)</li>
                            <li>환경친화적자동차 또는 저공해자동차(하이브리드차 포함) : 지하주차장(9면)</li>
                            <li>전기차 충전소 : 지상주차장(6면)</li>
                            <li>※휠체어를 이용하시는 분은 지상주차장을 이용해 주시기 바랍니다.</li>
                        </ul>
                    </div>
                    <div>
                    <h3 className='peeTit'>주차요금</h3>
                    <table className='pee'>
                        <tr>
                            <td className='silver'>구 분</td>
                            <td className='silver'>기본 1시간</td>
                            <td className='silver'>초과요금(매 10분)</td>
                            <td className='silver'>회전시간(10분)</td>
                            <td className='silver'>비고</td>
                        </tr>
                        <tr>
                            <td className='silver'>소형차</td>
                            <td>3,000원</td>
                            <td>800원</td>
                            <td>무료</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='silver'>중/대형차</td>
                            <td>5,000원</td>
                            <td>800원</td>
                            <td>무료</td>
                            <td></td>
                        </tr>
                    </table>
                    <p className='red'>※ 단, 소형차량이 지상주차장 이용 시 중/대형차 요금이 적용됩니다.</p>
                    <h3 className='peeTit'>요금 할인</h3>
                    <table className='pee'>
                        <thead>
                        <tr>
                            <td className='silver'>구 분</td>
                            <td className='silver'>내 용</td>
                            <td className='silver'>비 고</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className='silver'>감면 (80%)</td>
                            <td><ul>
                                <li>- 장애인차량</li>
                                <li>- 국가유공자차량</li>
                                <li>- 의사상자인정자 차량</li>
                                </ul>
                            </td>
                            <td>국가에서 발급한 증명서 또는 확인서류(복지카드, 유공자증, 의사상자증등)를 지참하고 관련 식별표지가 부착된 차량으로 본인이 차량에 탑승한 경우 </td>
                        </tr>
                        <tr>
                            <td className='silver'>감면 (50%)</td>
                            <td><ul>
                                <li>- 경승용차(1,000cc 이하)</li>
                                <li>- 환경친화적자동차 또는 저공해자동차(하이브리드차 포함)</li>
                                <li>- 다자녀가족 차량(2자녀 이상)</li>
                                </ul>
                            </td>
                            <td>다자녀가족임을 증명할 수 있는 서류(다자녀카드, 가족관계등록부,건강보험증 등)를 지참하고 신분증과 함께 제시하는 경우 </td>
                        </tr>
                        </tbody>
                    </table>
                    <p className='red'>※ 경차는 배기량이 1000cc미만으로써 길이 3.6미터,너비1.6미터,높이 2.0미터 이하인 차</p>
                    <p className='red'>※ 저공해 자동차는 차량출고시 저공해자동차로 등록되며, 증명서 및 발급번호를 받은 차량, 일반차량등의 LPG차량 변경등은 해당되지 않음</p>
                    <p className='red'>※ 전기자동차는 충전할 경우 1시간 범위 내에서 주차요금을 면제하고, 1시간 초과 시부터 부과되는 주차요금의 100분의 50을 할인</p>
                    </div>
                
            </article>
        </section>
        </>
    )

}

const Way2 = ()=>{
    const [oneDep, setOneDep] = useState(1);
    
    function clickOne(index){
        setOneDep(index);
    }  

    const [twoDep, setTwoDep] = useState(2);
    
    function clickTwo(index){
        setTwoDep(index);
    }  

    return(
        <>
        <SupTop supTopImg={'subTourInfoTop'} supTopTit={'관광안내'}/>
        {/* 원뎁스 */}
        <ul className="oneDep flex subDefaultContent">
         <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to='/Way'>오시는길</Link></li>
         <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}><Link to='/ResLi/category/res'>주변안내</Link></li>
        </ul>
        {/* 투뎁스 */}
        <ul className="twoDep flex">
        <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(1)}><Link to='/Way'>경복궁 별빛야행</Link></li>
        <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(2)}><Link to='/Way2'>창덕궁 달빛기행</Link></li>
        </ul>
        <section className='subDefaultContent'>
            <article>
                
            <LineTit subtit={'오시는길'}/>   
            <div className='kakao flex'>     
                <Map2 />     
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
        </>
    )

}

export {Way,Way2};