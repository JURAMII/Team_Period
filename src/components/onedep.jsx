import './onedep.css'
import { useState } from 'react';
import {Link} from 'react-router-dom';

const OneDep = (props) => {
    const [oneDep, setOneDep] = useState(1);

    const clickOne= (index) => {
        setOneDep(index);
    }

    return(
        <ul className='oneDep flex'>
            <li className={oneDep === 1 ? "mFont check" : "mFont"} onClick={() => clickOne(1)}><Link to = {props.links1}>{props.subtit1}</Link></li>
            <li className={oneDep === 2 ? "mFont check" : "mFont"} onClick={() => clickOne(2)}><Link to = {props.links2}>{props.subtit2}</Link></li>
            <li className={oneDep === 3 ? "mFont check" : "mFont"} onClick={() => clickOne(3)}><Link to = {props.links3}>{props.subtit3}</Link></li>
        </ul>
    )
}


export default OneDep;