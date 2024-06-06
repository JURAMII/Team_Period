import './subFesInfoCom.css'
import LineTit from './lineTit'
// 이미지
import 
{Kposter, 
Cposter, 
Kmap,
Kmusic,
Kfood,
Ktalk1,
Ktalk2,
Ktalk3,
Cmap,
Cmusic1,
Cmusic2,
Ctalk1,
Ctalk2,
} from './fesInfoimgs'

// 서브 축제정보 페이지
const SubFesInfoK = () =>{

    return(
        <section className="subDefaultContent calcWidth">
        <LineTit subtit={'축제정보'}/>
        <div className='subInfoWrap flex'>
            <div><img src={Kposter} alt="경복궁 별빛야행" /></div>
            <div>
                <ul>
                    <li className='subInfoTit'>경복궁 별빛야행</li>
                    <li><span>행사기간</span>2024년 4월3일 ~ 5월 4일(월, 화 휴무)</li>
                    <li><span>행사시간</span>1회 18:40 ~ 20:30<span className='middleSlash'>|</span>2회 19:40 ~ 21:30</li>
                    <li><span>접수장소</span>경복궁 민속박물관 앞 안내데스크</li>
                    <li><span>접수시간</span>행사 시작 20분 전 시작<div>
                    *입장시간이 경과되면 입장에 제한이 있을 수 있으니, 시간 준수 부탁드립니다</div></li>
                    <li><span>관람안내</span>음식 체험 및 야간 해설 탐방이 110분에 걸쳐 진행되며 내부관람도 포함되어 있으니 편한 신발과 겉옷을 준비해 주시기 바랍니다.</li>
                    <li><span>우천시안내</span><div>*행사 당일 오전 11시 기상청 예보 기준으로</div></li>
                    <li>이미지</li>
                    <li><span>전화문의</span>궁능 프로그램 콜센터 1522 - 2295</li>
                </ul>
            </div>
        </div>
        </section>
    )
}


const SubFesInfoC = () =>{

    return(
        <section className="subDefaultContent calcWidth">
        <LineTit subtit={'축제정보'}/>
        <div className='subInfoWrap flex'>
            <div><img src={Cposter} alt=" 별빛야행" /></div>
            <div>
                <ul>
                    <li className='subInfoTit'>창덕궁 달빛기행</li>
                    <li><span>행사기간</span>2024년 4월 11일 ~ 6월 2일(매주 목~일)</li>
                    <li><span>행사시간</span>1회 19:20 (19:20 / 19:25 / 19:30) <span className='middleSlash'>|</span>2회 20:00 (20:00 / 20:05 / 20:10)</li>
                    <li><span>접수장소</span>창덕궁 돈화문 앞 안내데스크</li>
                    <li><span>접수시간</span>행사 시작 20분 전 시작<div>
                    *입장시간이 경과되면 입장에 제한이 있을 수 있으니, 시간 준수 부탁드립니다</div></li>
                    <li><span>관람안내</span>음식 체험 및 야간 해설 탐방이 100분에 걸쳐 진행되며 내부관람도 포함되어 있으니 편한 신발과 겉옷을 준비해 주시기 바랍니다.</li>
                    <li><span>우천시안내</span><div>*행사 당일 오전 11시 기상청 예보 기준으로</div></li>
                    <li>이미지</li>
                    <li><span>전화문의</span>궁능 프로그램 콜센터 1522 - 2295</li>
                </ul>
            </div>
        </div>
        </section>
    )
}

// 서브 프로그램 페이지

const ProgramK = () =>{

    return(
        <section className="subDefaultContent calcWidth">
        <LineTit subtit={'프로그램'}/>
        <div className='programWrap'>
            <div className='progRote'>
                <p className='sFont pTit'>관람 동선 안내</p>
                <div><img src={Kmap} alt="경복궁 지도" /></div>
                <ul className='flex'>
                    <li><span>1 외소주방</span>도슭수라상 궁중음식체험과 국악공연</li>
                    <li><span>2 장고</span>장고마마와 나인의 작은 극 관람</li>
                    <li><span>3 집옥재, 팔우정</span>내부관람</li>
                    <li><span>4 건청궁</span>해설사의 전각 설명 및 관람</li>
                    <li><span>5 향원정</span>취향교 건너 특별 관람</li>
                </ul>
            </div>
            <div>
                <p className='sFont pTit2'>궁중음식 체험 및 국악공연 관람</p>
                <p className='cFont subPTit'>궁궐의 부엌인 ‘소주방’에 들러 조선의 왕이 먹던 일상식인 12첩 반상을 현대적으로 재해석한 ‘도슭수라상’을 맛보게 됩니다.</p>
                <p className='cFont subPTit subPTit2'>맛있는 수라상을 먹는 동안 국악공연이 함께 펼쳐져 맛과 멋의 풍류로 가득한 밤이 될 것입니다.</p>
                <div className='flex KtourWrap'>
                    <img src={Kmusic} alt="경복궁 국악공연" />
                    <img src={Kfood} alt="도슾수라상" />
                </div>
            </div>
            <div>
            <p className='sFont pTit2'>야간해설탐방<br /><span className='subPTit'>(소요시간 : 약110분)</span></p>
            <p className='cFont subPTit'>경복궁 별빛야행은 야간 특별관람 때에 공개되지 않았던 경복궁 북측 권역을 탐방하며, 복원을 완료한 향원정을 고즈넉한 분위기에서 감상하실 수 있습니다.</p>
            <div className='KtalkWrap'>
                <img src={Ktalk1} alt="경복궁야간해설" />
                <div className='flex'>
                <img src={Ktalk2} alt="경복궁야간해설" />
                <img src={Ktalk3} alt="경복궁야간해설" />
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}
const ProgramC = () =>{

    return(
        <section className="subDefaultContent calcWidth">
        <LineTit subtit={'프로그램'}/>
        <div className='programWrap'>
            <div className='progRote'>
                <p className='sFont pTit'>관람 동선 안내</p>
                <div><img src={Cmap} alt="창덕궁지도" /></div>
                <ul className='flex'>
                    <li><span>1 돈화문</span>집결</li>
                    <li><span>2 금천교</span></li>
                    <li><span>3 인정전</span></li>
                    <li><span>4 희정당</span></li>
                    <li><span>5 낙선재</span></li>
                    <li><span>6 상량전</span>대금 연주</li>
                    <li><span>7 부용지</span>거문고 연주</li>
                    <li><span>8 블로문</span>가곡</li>
                    <li><span>9 연경당</span>박접무, 산조춤 공연</li>
                    <li><span>10 후원숲길</span></li>
                </ul>
            </div>
            <div>
                <p className='sFont pTit2'>전통예술공연 관람</p>
                <p className='cFont subPTit'>은은한 달빛아래 녹음이 어우러진 창덕궁에서 전통 춤과 국악공연이 함께 어우러져 궁궐 곳곳의 정취를 느끼는 밤이 될 것입니다.</p>
                <div className='flex KtourWrap'>
                    <img src={Cmusic1} alt="창덕궁 공연1" />
                    <img src={Cmusic2} alt="창덕궁 공연2" />
                </div>
            </div>
            <div>
            <p className='sFont pTit2'>야간해설탐방<br /><span className='subPTit'>(소요시간 : 약100분)</span></p>
            <p className='cFont subPTit'>전문해설사와 함께 궁궐의 곳곳을 관람하며, 각 전각에 대한 해설을 들을 수 있습니다.</p>
            <div className='KtalkWrap CtalkWrap flex'>
                <img src={Ctalk1} alt="창덕궁 야간해설" />
                <img src={Ctalk2} alt="창덕궁 야간해설" />
            </div>
            </div>
        </div>
        </section>
    )
}

// 예매 안내
const TicketK = () =>{
    return(
        <section className="subDefaultContent calcWidth">
        <LineTit subtit={'예매 안내'}/>
        </section>
    )

}
const TicketC = () =>{
    return(
        <section className="subDefaultContent calcWidth">
        <LineTit subtit={'예매 안내'}/>
        </section>
    )

}
export {SubFesInfoK, SubFesInfoC, 
        ProgramK, ProgramC,
        TicketK, TicketC
    }