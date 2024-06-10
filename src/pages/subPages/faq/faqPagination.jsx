import Pagination from 'react-js-pagination'
import { useEffect, useMemo, useReducer, useState } from "react"
import { Fcontents, fReducer } from "./faqData"

const FaqPagination = () =>{
    const [state, dispatch] = useReducer(fReducer, Fcontents)
    const {fconts} = state;
 
    const [page, setPage] = useState(1);

    
    const handlePageChange = (page) => { setPage(page);};


    return(
        <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={fconts.length}
            pageRangeDisplayed={5}
            prevPageText={'<'}
            nextPageText={'>'}
            onChange={handlePageChange}>
          </Pagination>
    )
} 

export default FaqPagination