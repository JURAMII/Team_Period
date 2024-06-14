import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import '../../../components/onedep.css'
import '../../../components/twodep.css'

const InfoDep = ({one}) =>{

    const [oneDep, setOneDep] = useState(one);

    function clickOne(index){
        setOneDep(index);
        document.querySelector('.oneDep').scrollTop
    }

    return(
        <ul className="oneDep flex subDefaultContent">
        <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to='/Kinfo'>경복궁 별빛야행</Link></li>
        <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}><Link to='/Cinfo'>창덕궁 달빛기행</Link></li>
       </ul>
    )
}


const InfoDep2 = ({one}) =>{

    const [twoDep, setTwoDep] = useState(one);
  
    function clickTwo(index){
      setTwoDep(index);
  }
   
    return(
        <ul className="twoDep flex">
        <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(1)}><Link to='/Kinfo'>축제정보</Link></li>
        <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(2)}><Link to='/Kprogram'>프로그램</Link></li>
        <li className={twoDep === 3 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(3)}><Link to='/Kticket'>예매안내</Link></li>
        </ul>
    )
}

const InfoDep3 = ({one}) =>{

    const [twoDep, setTwoDep] = useState(one);
  
    function clickTwo(index){
      setTwoDep(index);
  }
   
    return(
        <ul className="twoDep flex">
        <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(1)}><Link to='/Cinfo'>축제정보</Link></li>
        <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(2)}><Link to='/Cprogram'>프로그램</Link></li>
        <li className={twoDep === 3 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(3)}><Link to='/Cticket'>예매안내</Link></li>
        </ul>
    )
}


export {InfoDep, InfoDep2, InfoDep3}

