import "./header.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import icon1 from "../../../assets/로고 최종.png";
import { Menu } from "./Menu/Menu";
import KakaoLogin from "../Login/KakaoLogin";

const Header = ({ setIsMenuVisible }) => {
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보를 저장하는 상태

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev); // 메뉴의 가시성을 토글합니다
  };

  const handleLogout = () => {
    const token = localStorage.getItem('kakao_token'); // localStorage에서 토큰 가져오기

    if (token) {
      // 카카오 로그아웃 API 호출
      fetch('https://kapi.kakao.com/v1/user/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status === 200) { // 로그아웃 성공 여부 확인
          setUserInfo(null); // 사용자 정보 초기화
          localStorage.removeItem('kakao_token'); // 토큰 삭제

          // URL에서 인가 코드 제거
          window.history.pushState({}, document.title, window.location.pathname);
        } else {
          console.error('로그아웃 실패');
        }
      })
      .catch(error => {
        console.error('로그아웃 실패', error);
      });
    } else {
      console.error('토큰이 없습니다.');
    }
  };

  return (
    <header>
      <div className="headNavi">
        <div className="logo">
          <Link to="/">
            <img src={icon1} alt="로고" />
          </Link>
        </div>
        <div className="headMenuWrap">
          <ul className="headMenu">
            <li>
              <Link to="/Kinfo">축제소개</Link>
            </li>
            <li>
              <Link to="/notiList/category/noti">공지사항</Link>
            </li>
            <li>
              <Link to="Gallery/category/starLigth">갤러리</Link>
            </li>
            <li>
              <Link to="/Faq">고객지원</Link>
            </li>
            <li>
              <Link to="">관광안내</Link>
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
                  <span>{userInfo.nickname}</span>
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