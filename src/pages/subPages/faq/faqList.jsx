import './faq.css'
import { Fadd, Fminus } from "../fesInfo/fesInfoimgs"
import { useState, useEffect } from 'react'

const FaqList = ({fans, fqes, id, findex, FsetIndex}) => {
    const [toggle, setToggle] = useState(false)
    const [calc, setCalc] = useState(5)

    useEffect(() => {
        if (id === findex) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }, [findex, id])

    const faqClick = () => {
        if (id === findex) {
            FsetIndex(null) // Close if clicked again
        } else {
            FsetIndex(id)
        }
    }
  
    const plusCalc = () => {
        setCalc(calc + 1)
    }
    
    return (
        <div className='faqWrap'>
            <div className='fqes flex' onClick={faqClick}>
                <p className='cFont textEllipsis'>{fqes}</p>
                <span>
                    {toggle ? <img src={Fminus} alt="닫기" /> : <img src={Fadd} alt="열기" />}
                </span>
            </div>
            <div className='fans'>
                {toggle && (
                    <>
                        <p className='cFont'>{fans}</p>
                        <div className='faqUpWrap flex'>
                            <ul className='faqUp' onClick={plusCalc}>
                                <li>👍</li>
                                <li>{calc}</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default FaqList