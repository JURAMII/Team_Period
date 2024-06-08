import './twodep.css'
import { useState } from 'react';
import {Link} from 'react-router-dom';

const TwoDep = (props) => {
    const [twoDep, setTwoDep] = useState(1);

    function clickTwo(index){
        setTwoDep(index);
    }

    return(
       <ul className='twoDep flex'>
       <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(1)}>{props.Tsubtit1}</li>
       <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(2)}>{props.Tsubtit2}</li>
       <li className={twoDep === 3 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(3)}>{props.Tsubtit3}</li>
   </ul>
    )
}


export default TwoDep;