import { Menu } from "../header/Menu/Menu";
import "../allMenuPage/allMenu.css";

const AllMenuPage = ({ setIsMenuVisible }) => {
  const toggleMenu = () => {
    setIsMenuVisible(false); // 전체 메뉴를 닫습니다
  };

  return (
    <div className="headWrap visi">
      <Menu toggleMenu={toggleMenu} /> {/* 닫기 기능을 추가한 Menu 컴포넌트 */}
      <div className="headImg">
        <div>
          <h2 className="titText">별빛야행</h2>
          <p>경복궁의 가장 깊은 곳, 북측 권역의 문이 열립니다.</p>
        </div>
      </div>
      <div className="headMenu">
        <div className="headInner">
          <ul className="boxWrap">
            <li className="menuBox grid1">
              <div>
                <h2 className="titText">축제소개</h2>
                <ul>
                  <li>축제정보</li>
                  <li>프로그램</li>
                  <li>예매안내</li>
                </ul>
              </div>
            </li>
            <li className="menuBox grid2">
              <div>
                <h2 className="titText">공지사항</h2>
                <ul>
                  <li>메인 공지</li>
                  <li>경복궁 공지</li>
                  <li>창덕궁 공지</li>
                </ul>
              </div>
            </li>
            <li className="menuBox grid3">
              <div>
                <h2 className="titText">갤러리</h2>
                <ul>
                  <li>축제 사진</li>
                  <li>축제 후기</li>
                </ul>
              </div>
            </li>
            <li className="menuBox grid4">
              <div>
                <h2 className="titText">커뮤니티</h2>
                <ul>
                  <li>자주하는 질문</li>
                  <li>묻고 답하기</li>
                </ul>
              </div>
            </li>
            <li className="menuBox grid5">
              <div>
                <h2 className="titText">관광안내</h2>
                <ul>
                  <li>오시는 길</li>
                  <li>주변 즐길거리</li>
                </ul>
              </div>
            </li>
            <li className="lastBox grid6">
              <div>
                <div>
                  <img />
                </div>
                <p>서울특별시 강남구 봉은사로 406(삼성동 112-2)</p>
                <p>Copyright(C) Korea Heritage Agency All Rights Reserved.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllMenuPage;