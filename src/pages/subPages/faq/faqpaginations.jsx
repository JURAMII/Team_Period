import Pagination from 'react-js-pagination'
import './faq.css'


const FaqPagination = ({page, setPage, postPerPage, allCount}) =>{
    
    const handlePageChange = (page) => { setPage(page); };
   
    return(
        <div>
          <Pagination
            activePage={page}
            itemsCountPerPage={postPerPage}
            totalItemsCount={allCount}
            pageRangeDisplayed={5}
            prevPageText={'<'}
            nextPageText={'>'}
            onChange={handlePageChange}>
          </Pagination>
      </div>
    )
} 

export default FaqPagination