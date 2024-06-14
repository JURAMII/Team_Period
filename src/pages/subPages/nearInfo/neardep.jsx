import { useState } from 'react';
import { Link } from 'react-router-dom';

const Neardep = ({one})=>{

const [oneDep, setOneDep] = useState(one);
    
function clickOne(index){
    setOneDep(index);
}  

return(
    <>
    <ul className="oneDep flex subDefaultContent">
     <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}><Link to='/Way'>오시는길</Link></li>
     <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}><Link to='/ResLi/category/res'>주변안내</Link></li>
    </ul>
    </>
)
}

export default Neardep;