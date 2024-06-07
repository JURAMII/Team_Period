import { Fadd, Fminus } from "../../../components/fesInfoimgs"
import FaqList from "./faqList"
import { Fcontents, fReducer } from "./faqData"
import { useReducer } from "react"

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
        {fconts.map((fcont)=><FaqList id={fcont.id} fcont={fcont} Fsearch={Fsearch}/>)}
        </section>
    )
}

export default Faq