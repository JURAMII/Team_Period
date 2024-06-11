import Pagination from 'react-js-pagination'
import './faq.css'
import { Fadd, Fminus } from "../fesInfo/fesInfoimgs"

import { useReducer, useState } from "react"
import { Fcontents, fReducer } from "./faqData"

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

const FaqPagination = () =>{
    const [state, dispatch] = useReducer(fReducer, Fcontents)
    const {fconts} = state;
    const [findex, FsetIndex] = useState(0)
    const [page, setPage] = useState(1);

    const postPerPage = 10
    const indexOfLastPost = page * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = fconts.slice(indexOfFirstPost, indexOfLastPost)
  
    const handlePageChange = (page) => { setPage(page); };
   
    return(
        <div>
           {currentPost.map((fcont)=><FaqList key={fcont.id} {...fcont} findex={findex} FsetIndex={FsetIndex} id={fcont.id}/>)}
          <Pagination
            activePage={page}
            itemsCountPerPage={postPerPage}
            totalItemsCount={fconts.length}
            pageRangeDisplayed={5}
            prevPageText={'<'}
            nextPageText={'>'}
            onChange={handlePageChange}>
          </Pagination>
      </div>
    )
} 

export default FaqPagination