import './onedep.css'
import { useState } from 'react';

const OneDep = (props) => {
    const [oneDep, setOneDep] = useState(1);

    const clickOne= (index) => {
        setOneDep(index);
    }

    return(
        <ul className='oneDep flex'>
            <li className={oneDep === 1 ? "mFont check" : "mFont"} onClick={() => clickOne(1)}>{props.subtit1}</li>
            <li className={oneDep === 2 ? "mFont check" : "mFont"} onClick={() => clickOne(2)}>{props.subtit2}</li>
            <li className={oneDep === 3 ? "mFont check" : "mFont"} onClick={() => clickOne(3)}>{props.subtit3}</li>
        </ul>
    )
}


export default OneDep;