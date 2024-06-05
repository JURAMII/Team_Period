import './header.css';
import icon1 from '../../../assets/로고 최종.png';
import icon2 from '../../../assets/icons8-account-72.png';
import icon3 from '../../../assets/icons8-earth-50.png';

const Header = ()=>{
    return(
        <header>
            <div className='test1'>
                <a>
                    <img src={icon1} alt="" />
                </a>
                <div className='test2'>
                    <ul className='test2-1'>
                        <li><a href='/'>축제소개</a></li>
                        <li><a href='/'>공지사항</a></li>
                        <li><a href='/'>갤러리</a></li>
                        <li><a href='/'>고객지원</a></li>
                        <li><a href='/'>관광안내</a></li>
                    </ul>
                </div>
                <div className='test3'>
                    <ul className='test31'>
                        <li><img src={icon2} alt="" /></li>
                        <li><img src={icon3} alt="" /></li>
                        <li className='menu'>
                            <div className='dotWrap'>
                                <div className='dot'></div>
                                <div className='dot'></div>
                                <div className='dot'></div>
                                <div className='dot'></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;