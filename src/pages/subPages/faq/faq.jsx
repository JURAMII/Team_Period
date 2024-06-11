import './faq.css'
import { Fcontents, fReducer } from "./faqData"
import { useMemo, useReducer } from "react"

import SupTop from '../../../components/common/supTop'
import OneDep from '../../../components/onedep'
import FaqPagination from './faqpaginations'
import FaqSearch from './faqSearch'


const Faq = () => {
    const [state, dispatch] = useReducer(fReducer, Fcontents)
    const {fconts, fsearch} = state;
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
        <SupTop supTopImg={'subSupportTop'} supTopTit={'고객지원'}/>
        <OneDep OsubTits={OsubTitsF} Olinks={TlinksF}/>
        <section className="faqSec">
        <h6>total <span>{allCount}</span></h6>
        <span className='faqTopLine'></span>
        <FaqPagination {...fconts}/>
        <FaqSearch Fsearch={Fsearch} />
        </section>
      </>
    )
}

export default Faq