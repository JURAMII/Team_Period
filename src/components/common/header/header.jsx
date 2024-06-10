import "./header.css";
import icon1 from "../../../assets/로고 최종.png";
import icon2 from "../../../assets/icons8-account-72.png";
import icon3 from "../../../assets/icons8-earth-50.png";
import { Routes, Route } from 'react-router-dom'; 
import { Menu } from "./Menu/Menu";

const Header = () => {
  return (
    <header>
      <div className="headNavi">
        <a className="logo">
          <img src={icon1} alt="" />
        </a>
        <div className="headMenuWrap">
          <ul className="headMenu">
            <li>
              <a href="/">축제소개</a>
            </li>
            <li>
              <a href="/">공지사항</a>
            </li>
            <li>
              <a href="/">갤러리</a>
            </li>
            <li>
              <a href="/">고객지원</a>
            </li>
            <li>
              <a href="/">관광안내</a>
            </li>
          </ul>
        </div>
        <div className="test3">
          <ul className="test31">
            <li>
              <img src={icon2} alt="" />
            </li>
            <li>
              <div className="lang_change">
                <select>
                  <option>KOR</option>
                  <option>ENG</option>
                </select>
              </div>
            </li>
            {/* 언어선택 메뉴는 차후 div 박스로 구현 예정 select 안 쓸거임 */}
            <Menu/>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
