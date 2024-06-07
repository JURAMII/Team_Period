import './faq.css'
import { Fadd, Fminus } from "../../../components/fesInfoimgs"

const FaqList = ({fcont, Fsearch}) => {
    return(
        <div className='faqWrap'>
            <div className='fqes'>
                <p>{fcont.fqes}</p>
            </div>
            <div className='fans'>
                <p>{fcont.fans}</p>
            </div>
        </div>
    )
}

export default FaqList