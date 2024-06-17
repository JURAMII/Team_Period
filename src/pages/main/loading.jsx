import './load.css';
import {useRef} from 'react';

const Loading = () => {

    const mask = useRef(); 
    const html = document.querySelector('html');
    
    // html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

    setTimeout(function () {
        mask.current.style.opacity = '0'; //서서히 사라지는 효과
        mask.current.style.display = 'none';
        // html.style.overflow = 'auto'; //스크롤 방지 해제
      }, 2000);


    return(
        <>
        <div className="mask"ref={mask}>
          <img className="loadingImg" src='https://i.ibb.co/20zw80q/1487.gif'/>
        </div>
        </>
    )
}

export default Loading