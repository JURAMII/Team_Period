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
       <li><Link to ={props.Tlinks1} onClick={()=>clickTwo(1)} className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"}>{props.Tsubtit1}</Link></li>
       <li><Link to ={props.Tlinks2} onClick={()=>clickTwo(2)} className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} >{props.Tsubtit1}</Link></li>
       <li><Link to ={props.Tlinks3} onClick={()=>clickTwo(3)} >{props.Tsubtit1}</Link></li>
   </ul>
    )
}


export default TwoDep;