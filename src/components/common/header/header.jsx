import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon1 from "../../../assets/로고 최종.png";
import { Menu } from "./Menu/Menu";
import KakaoLogin from "../Login/KakaoLogin";
import "./header.css";

const Header = ({ setIsMenuVisible }) => {
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보를 저장하는 상태

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev); // 메뉴의 가시성을 토글합니다
  };

  const closeMenu = () => {
    if (setIsMenuVisible) {
      setIsMenuVisible(false); // 현재 메뉴가 보이는 상태이면 메뉴를 숨깁니다
    }
  };

  const handleLogout = () => {
    confirm("로그아웃 하시겠습니까?");

    const token = localStorage.getItem('kakao_token'); // localStorage에서 토큰 가져오기

    if (token) {
      // 카카오 계정 연결 해제 API 호출
      fetch('https://kapi.kakao.com/v1/user/unlink', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status === 200) { // 연결 해제 성공 여부 확인
          setUserInfo(null); // 사용자 정보 초기화
          localStorage.removeItem('kakao_token'); // 토큰 삭제

          // URL에서 인가 코드 제거
          window.history.pushState({}, document.title, window.location.pathname);
        } else {
          console.error('연결 해제 실패');
        }
      })
      .catch(error => {
        console.error('연결 해제 실패', error);
      });
    } else {
      console.error('토큰이 없습니다.');
    }

    alert("로그아웃 되었습니다.");

  };

  return (
    <header>
      <div className="headNavi">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={icon1} alt="로고" />
          </Link>
        </div>
        <div className="headMenuWrap">
          <ul className="headMenu">
            <li>
              <Link to="/Kinfo" onClick={closeMenu}>축제소개</Link>
            </li>
            <li>
              <Link to="/notiList/category/noti" onClick={closeMenu}>공지사항</Link>
            </li>
            <li>
              <Link to="Gallery/category/starLigth" onClick={closeMenu}>갤러리</Link>
            </li>
            <li>
              <Link to="/Faq" onClick={closeMenu}>고객지원</Link>
            </li>
            <li>
              <Link to="/Way" onClick={closeMenu}>관광안내</Link>
            </li>
          </ul>
        </div>
        <div className="test3">
          <ul className="test31">
            <li>
              {userInfo ? (
                <div className="profile">
                  <img
                    src={userInfo.profile_image}
                    alt="프로필 이미지"
                    onClick={handleLogout} // 클릭 시 로그아웃 및 인가 코드 제거
                  />
                </div>
              ) : (
                <KakaoLogin setUserInfo={setUserInfo} onLogout={handleLogout} /> // 로그인 시 setUserInfo로 사용자 정보 저장, 로그아웃 함수 전달
              )}
            </li>
            <li>
              <div className="lang_change">
                <select className="lang">
                  <option>KOR</option>
                  <option>ENG</option>
                </select>
              </div>
            </li>
            <Menu toggleMenu={toggleMenu} /> {/* Menu에 토글 함수를 전달 */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
