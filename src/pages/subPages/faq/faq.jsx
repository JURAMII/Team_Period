import './faq.css'
import { Fadd, Fminus } from "../fesInfo/fesInfoimgs"
import { Fcontents, fReducer } from "./faqData"
import { useMemo, useReducer, useState } from "react"

import SupTop from '../../../components/common/supTop'
import OneDep from '../../../components/onedep'
import FaqSearch from './faqSearch'


const FaqList = ({fans,fqes,id, findex, FsetIndex}) => {

    const [toggle, setToggle] = useState(false)

    const faqClick=(id)=>{
        setToggle(!toggle)
        FsetIndex(id)
    }

    const [calc,setcalc] = useState(5);

    const plusCalc = () =>{
      setcalc(calc + 1)
    }
    
    return(
        <div className='faqWrap'>
            <div className='fqes flex' onClick={()=>faqClick(id)}>
                <p className='cFont'>{fqes}</p>
                <span>
                    {!!toggle&&id===findex? <img src={Fminus} alt="닫기" />:
                     <img src={Fadd} alt="열기" />
                    }
                </span>
            </div>
            <div className='fans'>
                {!!toggle && id===findex && <><p className='cFont'>{fans}</p>
                <div className='faqUpWrap flex'>
                <ul className='faqUp' onClick={plusCalc}>
                    <li>👍</li>
                    <li>{calc}</li>
                </ul>
                </div>
                </>}
            </div>
        </div>
    )
}


const Faq = () => {
    const [state, dispatch] = useReducer(fReducer, Fcontents)
    const {fconts, fsearch} = state;
    const [findex, FsetIndex] = useState(0)
    const OsubTitsF = ['자주하는 질문','묻고 답하기']
    const TlinksF = ['/Faq']
    const [currentPage, setCurrentPage] = useState(1);
    const [currentGroup, setCurrentGroup] = useState(1);

    const Fsearch = (text) =>{
        dispatch({
            type:'fsearch',
            text
        })
    }

    function allCounts (fconts){
        return fconts.length
      }
    
    const allCount = useMemo(()=>allCounts(fconts),[fconts])

     // 페이지네이션을 위한 상태를 정의
     const postsPerPage = 10; // 한 페이지에 노출될 게시물 수
     const pageGroupSize = 5; // 한 그룹에 표시될 페이지 수

      // 현재 페이지에 해당하는 게시물의 인덱스를 계산
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = fconts.slice(indexOfFirstPost, indexOfLastPost);

      // 페이지 번호를 클릭했을 때 실행되는 핸들러
      const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    // 이전 페이지 그룹으로 이동하는 핸들러
    const handlePreviousGroup = () => {
        if (currentGroup > 1) {
            setCurrentGroup(currentGroup - 1);
            setCurrentPage((currentGroup - 2) * pageGroupSize + 1);
        }
    };

    // 다음 페이지 그룹으로 이동하는 핸들러
    const handleNextGroup = () => {
        if (currentGroup * pageGroupSize < Math.ceil(fconts.length / postsPerPage)) {
            setCurrentGroup(currentGroup + 1);
            setCurrentPage(currentGroup * pageGroupSize + 1);
        }
    };

     // 총 페이지 수를 계산
     const totalPageCount = Math.ceil(fconts.length / postsPerPage);
     
     // 현재 그룹의 첫 번째 페이지와 마지막 페이지를 계산
     const startPage = (currentGroup - 1) * pageGroupSize + 1;
     const endPage = Math.min(startPage + pageGroupSize - 1, totalPageCount);
     const pageNumbers = [];
     for (let i = startPage; i <= endPage; i++) {
         pageNumbers.push(i); 
     }
 

    return(
      <>
        <SupTop supTopImg={'subSupportTop'} supTopTit={'고객지원'}/>
        <OneDep OsubTits={OsubTitsF} Olinks={TlinksF}/>
        <section className="faqSec">
        <h6>total <span>{allCount}</span></h6>
        <span className='faqTopLine'></span>
        {currentPosts.map((fcont)=><FaqList key={fcont.id} {...fcont} findex={findex} FsetIndex={FsetIndex} id={fcont.id}/>)}
        <div className="flex" style={{ justifyContent: 'center', padding: '20px 0' }}>
                <button onClick={handlePreviousGroup} disabled={currentGroup === 1} className="mainBtnSilver">
                    &lt;
                </button>
                {pageNumbers.map(number => (
                    <button key={number} id={number} onClick={handleClick} className={`mainBtnSilver ${number === currentPage ? 'active' : ''}`}>
                        {number}
                    </button>
                ))}
                <button onClick={handleNextGroup} disabled={endPage === totalPageCount} className="mainBtnSilver">
                    &gt;
                </button>
            </div>
        <FaqSearch Fsearch={Fsearch} />
        </section>
      </>
    )
}

export default Faq