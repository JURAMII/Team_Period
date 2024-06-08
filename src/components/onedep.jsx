import './onedep.css'
import { useState } from 'react';
import {Link} from 'react-router-dom';

const OneDep = (props) => {

    const [oneDep, setOneDep] = useState(1);

    const clickOne= (index) => {
        setOneDep(index);
    }

    return(
        <ul className='oneDep flex subDefaultContent'>
        <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}>{props.subtit1}</li>
        <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}>{props.subtit2}</li>
        <li className={oneDep === 3 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(3)}>{props.subtit3}</li>
    </ul>
    )

}


export default OneDep;