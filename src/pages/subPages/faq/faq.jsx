import './faq.css'
import { Fcontents, fReducer } from "./faqData"
import { useMemo, useReducer, useState } from "react"

import SupTop from '../../../components/common/supTop'
import FaqDep from './faqDep'
import FaqPagination from './faqpaginations'
import FaqSearch from './faqSearch'
import FaqList from './faqList'


const Faq = () => {
    const [state, dispatch] = useReducer(fReducer, Fcontents)
    const {fconts, fsearch} = state;
    const [findex, FsetIndex] = useState(0)
    const [page, setPage] = useState(1);
    const postPerPage = 10
    const indexOfLastPost = page * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = fconts.slice(indexOfFirstPost, indexOfLastPost)
  

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

    const one = 1;

    return(
      <>
        <SupTop supTopImg={'subSupportTop'} supTopTit={'고객지원'}/>
        <FaqDep one={one}/>
        <section className="faqSec">
        <h6>total <span>{allCount}</span></h6>
        <span className='faqTopLine'></span>
        {currentPost.map((fcont)=><FaqList key={fcont.id} {...fcont} findex={findex} FsetIndex={FsetIndex} id={fcont.id}/>)}
        <FaqPagination page={page} setPage={setPage} postPerPage={postPerPage} allCount={allCount}/>
        <FaqSearch Fsearch={Fsearch} />
        </section>
      </>
    )
}

export default Faq