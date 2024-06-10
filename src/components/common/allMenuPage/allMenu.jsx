import '../allMenuPage/allMenu.css'

const AllMenuPage = () => {
    return(
        <div className="headWrap">
            <div className="headImg">
                <div>
                    <p>별빛야행</p>
                    <p>경복궁의 가장 깊은 곳, 북측 권역의 문이 열립니다.</p>
                </div>
            </div>
            <div className="headMenu">
                <div className="headInner">
                    <ul className="boxWrap">
                        <li className="menuBox grid1">
                            <h2>축제소개</h2>
                            <p>축제정보</p>
                            <p>프로그램</p>
                            <p>예매안내</p>
                        </li>
                        <li className="menuBox grid2">
                            <h2>공지사항</h2>
                            <p>메인 공지</p>
                            <p>경복궁 공지</p>
                            <p>창덕궁 공지</p>
                        </li>
                        <li className="menuBox grid3">
                            <h2>갤러리</h2>
                            <p>축제 사진</p>
                            <p>축제 후기</p>
                        </li>
                        <li className="menuBox grid4">
                            <h2>커뮤니티</h2>
                            <p>자주하는 질문</p>
                            <p>묻고 답하기</p>
                        </li>
                        <li className="menuBox grid5">
                            <h2>관광안내</h2>
                            <p>오시는 길</p>
                            <p>주변 즐길거리</p>
                        </li>
                        <li className="lastBox grid6">
                            <div>
                                <img />
                            </div>
                            <p>서울특별시 강남구 봉은사로 406(삼성동 112-2)</p>
                            <p>Copyright(C) Korea Heritage Agency All Rights Reserved.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
} 

export default AllMenuPage;