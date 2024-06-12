import './faq.css'
import { Fadd, Fminus } from "../fesInfo/fesInfoimgs"
import { useState } from 'react'

const FaqList = ({fans, fqes, id, findex, FsetIndex}) => {

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

  export default FaqList