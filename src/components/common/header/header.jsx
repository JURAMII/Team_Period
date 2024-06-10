import "./header.css";
import {Link} from 'react-router-dom';
import icon1 from "../../../assets/로고 최종.png";
import icon2 from "../../../assets/icons8-account-72.png";

const Header = () => {
  return (
    <header>
      <div className="headNavi">
        <a className="logo">
          <img src={icon1} alt="" />
        </a>
        <div className="headMenuWrap">
          <ul className="headMenu">
            {/* <li>
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
            </li> */}
            <li>
              <Link to="">축제소개</Link>
            </li>
            <li>
              <Link to="">공지사항</Link>
            </li>
            <li>
              <Link to="">갤러리</Link>
            </li>
            <li>
              <Link to="">고객지원</Link>
            </li>
            <li>
              <Link to="">관광안내</Link>
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
            <li className="headMenuBtn">
              <div className="dotWrap">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;