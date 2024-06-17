import React from 'react';
import { Menu } from "../header/Menu/Menu";
import "../allMenuPage/allMenu.css";
import { Link } from 'react-router-dom';

const AllMenuPage = ({ setIsMenuVisible, isMenuVisible }) => {
  const toggleMenu = () => {
    setIsMenuVisible(false); // 전체 메뉴를 닫습니다
  };

  return (
    <>
      <Menu toggleMenu={toggleMenu} isMenuVisible={isMenuVisible} /> {/* 닫기 기능을 추가한 Menu 컴포넌트 */}
      <div className="headWrap visi">
        <div className="headImg">
          <div className="slider">
            <div className="slide">
              <h2 className="titText">별빛야행</h2>
              <p>경복궁의 가장 깊은 곳, 북측 권역의 문이 열립니다.</p>
            </div>
            <div className="slide">
              <h2 className="titText">달빛기행</h2>
              <p>창덕궁의 가장 깊은 곳, 북측 권역의 문이 열립니다.</p>
            </div>
          </div>
        </div>
        <div className="headMenuNavPage">
          <div className="headInner">
            <ul className="boxWrap">
              <li className="menuBox grid1">
                <div>
                  <h2 className="titText">축제소개</h2>
                  <ul>
                    <li><Link to="/Kinfo" onClick={toggleMenu}>축제정보</Link></li>
                    <li><Link to="/Kprogram" onClick={toggleMenu}>프로그램</Link></li>
                    <li><Link to="/Kticket" onClick={toggleMenu}>예매안내</Link></li>
                  </ul>
                </div>
              </li>
              <li className="menuBox grid2">
                <div>
                  <h2 className="titText">공지사항</h2>
                  <ul>
                    <li><Link to="/notiList/category/noti" onClick={toggleMenu}>공지사항</Link></li>
                    <li><Link to="/notiList/category/star" onClick={toggleMenu}>별빛야행 공지사항</Link></li>
                    <li><Link to="/notiList/category/moon" onClick={toggleMenu}>달빛기행 공지사항</Link></li>
                  </ul>
                </div>
              </li>
              <li className="menuBox grid3">
                <div>
                  <h2 className="titText">갤러리</h2>
                  <ul>
                    <li><Link to="/Gallery/category/starLigth" onClick={toggleMenu}>축제 사진</Link></li>
                    <li><Link to="/Gallery/category2/starLigth" onClick={toggleMenu}>축제 후기</Link></li>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li className="menuBox grid4">
                <div>
                  <h2 className="titText">커뮤니티</h2>
                  <ul>
                    <li><Link to="/Faq" onClick={toggleMenu}>자주하는 질문</Link></li>
                    <li><Link to="/QnaList/category/qna" onClick={toggleMenu}>묻고 답하기</Link></li>
                  </ul>
                </div>
              </li>
              <li className="menuBox grid5">
                <div>
                  <h2 className="titText">관광안내</h2>
                  <ul>
                    <li><Link to="/Way" onClick={toggleMenu}>오시는 길</Link></li>
                    <li><Link to="/ResLi/category/res" onClick={toggleMenu}>주변 즐길거리</Link></li>
                  </ul>
                </div>
              </li>
              <li className="lastBox grid6">
                <div className="slider hiddenContents">
                  <div className="slide">
                    <h2 className="titText">별빛야행</h2>
                    <p>경복궁의 가장 깊은 곳, 북측 권역의 문이 열립니다.</p>
                  </div>
                  <div className="slide">
                    <h2 className="titText">달빛기행</h2>
                    <p>창덕궁의 가장 깊은 곳, 북측 권역의 문이 열립니다.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMenuPage;
