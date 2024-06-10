import './faq.css'
import { useState } from 'react'

const FaqSearch = ({Fsearch}) =>{
   
    const [searchFaq, setSearchFaq] = useState('')

    function searchChange(e){
        setSearchFaq(e.target.value)
    }

    function searchFaqBtn(){
        Fsearch(searchFaq)
    }
    
    return(
        <div className='faqSearch flex'>
        <input type="text" className='subSearch' placeholder='search' value={searchFaq} onChange={searchChange}/>
        <input type="button" className='subSearchBtn' onClick={searchFaqBtn}/>
        </div>
    )
}

export default FaqSearch