import './faq.css'
import { Fadd, Fminus } from "../fesInfo/fesInfoimgs"
import { Fcontents, fReducer } from "./faqData"
import { useMemo, useReducer, useState } from "react"

import SupTop from '../../../components/common/supTop'
import OneDep from '../../../components/onedep'
import FaqSearch from './faqSearch'
import FaqPagination from './faqPagination'


const FaqList = ({fans,fqes,id, findex, FsetIndex}) => {

    const [toggle, setToggle] = useState(false)

    const faqClick=(id)=>{
        setToggle(!toggle)
        FsetIndex(id)
        // console.log(FsetIndex(id))
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



    return(
      <>
        <OneDep OsubTits={OsubTitsF} Olinks={TlinksF}/>
        <section className="faqSec">
        <h6>total <span>{allCount}</span></h6>
        <span className='faqTopLine'></span>
        {fconts.map((fcont)=><FaqList key={fcont.id} {...fcont} findex={findex} FsetIndex={FsetIndex} id={fcont.id}/>)}
        <FaqPagination {...fconts}/>
        <FaqSearch Fsearch={Fsearch} />
        </section>
      </>
    )
}

export default Faq