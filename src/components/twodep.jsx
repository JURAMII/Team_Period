import './twodep.css'
import { useState} from 'react';

const TwoDep = ({TsubTits, Tlinks}) => {
    const [twoDep, setTwoDep] = useState(0);


    function clickTwo(index){
        setTwoDep(index);
    }

    return(
       <ul className='twoDep flex'>
        {TsubTits.map((TsubTit,index)=><li key={index} className={twoDep === index ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>{clickTwo(index)}}>{TsubTit}</li>)}
      </ul>
    )
}

export default TwoDep;