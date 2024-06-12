import Pagination from 'react-js-pagination'
import './faq.css'

import { useReducer } from "react"
import { Fcontents, fReducer } from "./faqData"

const FaqPagination = ({page, setPage, postPerPage}) =>{
    const [state, dispatch] = useReducer(fReducer, Fcontents)
    const {fconts} = state;
    const handlePageChange = (page) => { setPage(page); };
   
    return(
        <div>
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