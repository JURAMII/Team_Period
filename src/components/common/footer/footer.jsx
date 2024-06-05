import './footer.css';


const Footer = ()=>{
    return(
        <>
        <footer>
            <h2>고궁의밤</h2>
            <div className='footerWrap'>
                <div className='footerBox'>
                    <p>서울특별시 강남구 봉은사로 406(삼성동 112-2)</p>
                    <span>Copyright(C) Korea Heritage Agency All Rights Reserved.</span>
                    <ul>
                        <li><a href="https://knto.or.kr/index"><img src="./logo_kto_white.svg" alt="한국관광공사" /></a></li>
                        <li><a href="https://www.mcst.go.kr/kor/main.jsp"><img src="./munlogo.png" alt="문화체육관광부 로고" /></a></li>
                        <li><a href="https://www.kh.or.kr/kha"><img src="./usanlogo.png" alt="국가유산진흥원 로고" /></a></li>
                    </ul>
                </div>
                <h1><a href="#"><img src="./logo_yellow.png" alt="logo_yellow" /></a></h1>
            </div>
        </footer>
        </>
    )
    
    
    
    }
    
    export default Footer;