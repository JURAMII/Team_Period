import "./header.css";
import { Link } from 'react-router-dom';
import icon1 from "../../../assets/로고 최종.png";
import icon2 from "../../../assets/icons8-account-72.png";
import { Menu } from "./Menu/Menu";

const Header = ({ setIsMenuVisible }) => {
  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev); // 메뉴의 가시성을 토글합니다
  };

  return (
    <header>
      <div className="headNavi">
        <a className="logo">
          <img src={icon1} alt="로고" />
        </a>
        <div className="headMenuWrap">
          <ul className="headMenu">
            <li>
              <Link to="/">축제소개</Link>
            </li>
            <li>
              <Link to="/">공지사항</Link>
            </li>
            <li>
              <Link to="/Gallery/">갤러리</Link>
            </li>
            <li>
              <Link to="/">고객지원</Link>
            </li>
            <li>
              <Link to="/">관광안내</Link>
            </li>
          </ul>
        </div>
        <div className="test3">
          <ul className="test31">
            <li>
              <img src={icon2} alt="계정 아이콘" />
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