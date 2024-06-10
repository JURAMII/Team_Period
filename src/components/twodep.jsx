import './twodep.css'
import { useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const TwoDep = ({TsubTits, Tlinks}) => {
    const [twoDep, setTwoDep] = useState(1);

    const navigate=useNavigate()


    function clickTwo(index){
        setTwoDep(index);
    }

    function twoDepPage(Tlinks){
        navigate(Tlinks)
    } 

    return(
       <ul className='twoDep flex'>
        {TsubTits.map((TsubTit,index)=><li key={index} className={twoDep === index ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>{clickTwo(index); twoDepPage(Tlinks)}}>{TsubTit}</li>)}
      </ul>
    )
}

export default TwoDep;