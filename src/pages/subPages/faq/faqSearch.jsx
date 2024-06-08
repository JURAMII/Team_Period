import './faq.css'

const FaqSearch = () =>{
   
    return(
        <div className='faqSearch flex'>
        <input type="text" className='subSearch' placeholder='search'/>
        <input type="button" className='subSearchBtn'/>
        </div>
    )
}

export default FaqSearch