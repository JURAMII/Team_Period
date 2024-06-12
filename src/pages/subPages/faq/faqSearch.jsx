import './faq.css'
import { useState } from 'react';

const FaqSearch = ({Fsearch}) =>{

    const [inputText, setInputText] = useState("");

    function searchChange(e){
        setInputText(e.target.value)
    }

    function searchFaqBtn(){
        Fsearch(inputText)
    }
    
    const activeEnter = (e) => {
        if(e.key === "Enter") {
        searchFaqBtn();
        }
      }
   
    return(
        <div className='faqSearch flex'>
        <input type="text" className='subSearch' placeholder='search' value={inputText} onChange={searchChange} onKeyDown={activeEnter}/>
        <input type="button" className='subSearchBtn' onClick={searchFaqBtn}/>
        </div>
    )
}

export default FaqSearch