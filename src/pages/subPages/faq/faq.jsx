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

//   const FaqList = ({fans,fqes}) => {

//     const [isAct, setIsAct] = useState(false)

//     function faqClick(){
//         setIsAct(!isAct)
//     }

//     return(
//         <div className='faqWrap'>
//             <div className='fqes flex' onClick={faqClick}>
//                 <p className='cFont'>{fqes}</p>
//                 <span>
//                     {isAct? <img src={Fminus} alt="닫기" />:
//                      <img src={Fadd} alt="열기" />
//                     }
//                 </span>
//             </div>
//             <div className='fans flex'>
//                 {isAct && <p className='cFont'>{fans}</p>}
//             </div>
//         </div>
//     )
// }

const Faq = () => {
    const [state, dispatch] = useReducer(fReducer, Fcontents)
    const {fconts, fsearch} = state;

    const [findex, FsetIndex] = useState(0)

    const Fsearch = (text) =>{
        dispatch({
            type:'fsearch',
            text
        })
    }

    function counts (fconts){
        return fconts.length
      }
    
    const count = useMemo(()=>counts(fconts),[fconts])

    return(
      <>
        <OneDep subtit1={'자주하는 질문'} subtit2={'묻고 답하기'} links1={'/Kinfo'} links2={'/Cinfo'}/>
        <section className="faqSec">
        <h6>total <span>{count}</span></h6>
        <span className='faqTopLine'></span>
        {fconts.map((fcont)=><FaqList key={fcont.id} {...fcont} findex={findex} FsetIndex={FsetIndex} id={fcont.id}/>)}
        <div className='faqPage'>1</div>
        <FaqSearch/>
        </section>
      </>
    )
}

export default Faq