import './faq.css'
import { Fadd, Fminus } from "../fesInfo/fesInfoimgs"
import { Fcontents, fReducer } from "./faqData"
import { useReducer, useState } from "react"
import SupTop from '../../../components/common/supTop'
import OneDep from '../../../components/onedep'
import FaqSearch from './faqSearch'

const FaqList = ({fcont}) => {

    const [isAct, setIsAct] = useState(false)

    function faqClick(e){
        setIsAct(!isAct)
    }

    return(
        <div className='faqWrap'>
            <div className='fqes flex' onClick={faqClick}>
                <p className='cFont'>{fcont.fqes}</p>
                <span>
                    {isAct? <img src={Fminus} alt="닫기" />:
                     <img src={Fadd} alt="열기" />
                    }
                </span>
            </div>
            <div className='fans flex'>
                {isAct && <p className='cFont'>{fcont.fans}</p>}
            </div>
        </div>
    )
}


const Faq = () => {
    const [state, dispatch] = useReducer(fReducer, Fcontents)
    const {fconts, fsearch} = state;

    const Fsearch = (text) =>{
        dispatch({
            type:'fsearch',
            text
        })
    }

    return(
      <>
        <OneDep subtit1={'자주하는 질문'} subtit2={'묻고 답하기'} links1={'/Kinfo'} links2={'/Cinfo'}/>
        <section className="faqSec">
        <span className='faqTopLine'></span>
        {fconts.map((fcont)=><FaqList key={fcont.id} fcont={fcont}/>)}
        <div className='faqPage'>1</div>
        <FaqSearch/>
        </section>
      </>
    )
}

export default Faq