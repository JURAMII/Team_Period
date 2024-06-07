import LineTit from '../../../components/lineTit';
import OneDep from '../../../components/onedep';
import KakaoMap from './map';
import './Way.css'

const Way = ()=>{

    return(
        <section className='subDefaultContent'>
            <article>
            <OneDep subtit1={'오시는길'} subtit2={'주변안내'}/>
            <LineTit subtit={'오시는길'}/>   
            <div className='kakao flex'>     
                <KakaoMap />     
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
            <div>
                <ul className='transport flex'>
                    <li>
                        <img src="icons8-subway-100.png" alt="subway icon" />
                        <div className='tr_txt'>
                            <b>지하철 이용시</b>
                            <p>3호선 경복궁역 5번 출구  도보 2분</p>
                        <p>3호선 안국역 1번출구  도보 6분</p>
                        <p>5호선 광화문역 2번 출구  도보 6분</p>
                        </div>
                    </li>
                    <li className='leftLine'><img src="icons8-bus-100.png" alt="bus icon" />
                    <div className='tr_txt'>
                            <b>버스 이용시</b>
                            <p>경복궁 하차<br />
                            간선 109, 171, 272, 601, 606, 710<br />
                            지선 1020, 7025</p>
                        <p>덕성여중고 하차<br />
                        간선 171, 272, 401, 406, 704, 710<br />
                        지선 1020, 7025</p>
                        </div>
                    </li>
                    <li className='leftLine'><img src="icons8-car-96.png" alt="car icon" />
                    <div className='tr_txt'>
                            <b>자가용 이용시</b>
                            <p>내비게이션  경복궁 <br />또는  경복궁주차장</p>
                        </div>
                        </li>
                </ul>
            </div>
            </article>
            <article className='parkingWrap'>
                <LineTit subtit={'주차안내'}/>
                <img src="./map_gyeongbokgung.png" alt="parking map" />
                <p>
                경복궁주차장은 ㈜아마노코리아에서 위탁 관리하는 경복궁 부설주차장입니다.<br />
                문의사항은 주차장관리사무소(02-736-9536)로 연락주시기 바랍니다.
                </p>
                <ul className='parking'>
                    <li>광화문에서 삼청동 가는 길 초입 좌측편에 위치</li>
                    <li>버스 50대(지상), 승용차 240대(지하)</li>
                    <li><b>유의사항</b>
                    <ul>
                        <li>- 주차장 운영시간: 06:00 ~ 23:00</li>
                        <li>- 장애인주차장: 지상주차장(9면)</li>
                        <li>- 환경친화적자동차 또는 저공해자동차(하이브리드차 포함) : 지하주차장(9면)</li>
                        <li>- 전기차 충전소 : 지상주차장(6면)</li>
                        <li>※휠체어를 이용하시는 분은 지상주차장을 이용해 주시기 바랍니다.</li>
                    </ul>
                    </li>
                </ul>
            </article>
        </section>
    )

}

export default Way;