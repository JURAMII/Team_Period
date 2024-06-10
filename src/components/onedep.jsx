import './onedep.css'
import { useState } from 'react';

const OneDep = ({OsubTits, Olinks}) => {

    const [oneDep, setOneDep] = useState(0);

    function clickOne(index){
        setOneDep(index);
        
    }

    return(
        <ul className='oneDep flex subDefaultContent'>
          {OsubTits.map((OsubTit,index)=><li key={index} className={oneDep === index ? "oneDeptit check" : "oneDeptit"} onClick={()=>clickOne(index)}>{OsubTit}</li>)}
    </ul>
    )

}


export default OneDep;