import './faq.css'
import { Fadd, Fminus } from "../../../components/fesInfoimgs"
import { Fcontents, fReducer } from "./faqData"
import { useReducer, useState } from "react"

const FaqList = ({fcont, Fsearch}) => {

    const [isAct, setIsAct] = useState(false)

    function faqClick(e){
        setIsAct(!isAct)
    }

    return(
        <div className='faqWrap'>
            <div className='fqes flex' onClick={faqClick}>
                <p className='cFont'>{fcont.fqes}</p>
                <span>
                    {isAct? <img src={Fminus} alt="닫기" />:
                     <img src={Fadd} alt="열기" />
                    }
                </span>
            </div>
            <div className='fans flex'>
                {isAct && <p className='cFont'>{fcont.fans}</p>}
            </div>
        </div>
    )
}


const Faq = () => {
    const [state, dispatch] = useReducer(fReducer, Fcontents)
    const {fconts} = state;

    const Fsearch = (text) =>{
        dispatch({
            type:'fsearch',
            text
        })
    }

    return(
        <section className="subDefaultContent">
        <span className='faqTopLine'></span>
        {fconts.map((fcont)=><FaqList key={fcont.id} fcont={fcont} Fsearch={Fsearch}/>)}
        </section>
    )
}

export default Faq