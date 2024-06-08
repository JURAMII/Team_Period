import './twodep.css'
import { useState } from 'react';
import {Link} from 'react-router-dom';

const TwoDep = (props) => {
    const [twoDep, setTwoDep] = useState(1);

    function clickTwo(index){
        setTwoDep(index);
    }

    return(
        <ul className='towDep flex'>
            <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={() => clickTwo(1)}><Link to = {props.Tlinks1}>{props.Tsubtit1}</Link></li>
            <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={() => clickTwo(2)}><Link to = {props.Tlinks2}>{props.Tsubtit2}</Link></li>
            <li className={twoDep === 3 ? "twoeptit tcheck" : "twoDeptit"} onClick={() => clickTwo(3)}><Link to = {props.Tlinks3}>{props.Tsubtit3}</Link></li>
        </ul>
    )
}


export default TwoDep;