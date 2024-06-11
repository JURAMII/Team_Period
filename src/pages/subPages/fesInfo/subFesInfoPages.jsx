import { SubFesInfoK, SubFesInfoC, ProgramK, ProgramC, TicketK, TicketC } from "./subFesInfoCom"
import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../components/onedep.css'
import '../../../components/twodep.css'
import SupTop from "../../../components/common/supTop"
import LineTit from "../../../components/lineTit"
import Scr

function Kinfo(){

  const [oneDep, setOneDep] = useState(1);

  const [twoDep, setTwoDep] = useState(1);
    
  function clickOne(index){
      setOneDep(index);
  }

  function clickTwo(index){
    setTwoDep(index);
}

    return(
        <>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <ul className="oneDep flex subDefaultContent">
         <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to='/Kinfo'>경복궁 별빛야행</Link></li>
         <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}><Link to='/Cinfo'>창덕궁 달빛기행</Link></li>
        </ul>
        <ul className="twoDep flex">
        <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(1)}><Link to='/Kinfo'>축제정보</Link></li>
        <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(2)}><Link to='/Kprogram'>프로그램</Link></li>
        <li className={twoDep === 3 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(3)}><Link to='/Kticket'>예매정보</Link></li>
        </ul>
        <LineTit subtit={'축제정보'}/>
        <SubFesInfoK/>
        </>
    )
}

function Cinfo(){
  const [oneDep, setOneDep] = useState(2);

  const [twoDep, setTwoDep] = useState(1);
    
  function clickOne(index){
      setOneDep(index);
  }

  function clickTwo(index){
    setTwoDep(index);
}
    return(
        <>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <ul className="oneDep flex subDefaultContent">
         <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to='/Kinfo'>경복궁 별빛야행</Link></li>
         <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}><Link to='/Cinfo'>창덕궁 달빛기행</Link></li>
        </ul>
        <ul className="twoDep flex">
        <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(1)}><Link to='/Cinfo'>축제정보</Link></li>
        <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(2)}><Link to='/Cprogram'>프로그램</Link></li>
        <li className={twoDep === 3 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(3)}><Link to='/Cticket'>예매정보</Link></li>
        </ul>
        <LineTit subtit={'축제정보'}/>
        <SubFesInfoC/>
        </>
    )
}

function Kpro(){
  const [oneDep, setOneDep] = useState(1);

  const [twoDep, setTwoDep] = useState(2);
    
  function clickOne(index){
      setOneDep(index);
  }

  function clickTwo(index){
    setTwoDep(index);
}
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <ul className="oneDep flex subDefaultContent">
         <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to='/Kinfo'>경복궁 별빛야행</Link></li>
         <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}><Link to='/Cinfo'>창덕궁 달빛기행</Link></li>
        </ul>
        <ul className="twoDep flex">
        <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(1)}><Link to='/Kinfo'>축제정보</Link></li>
        <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(2)}><Link to='/Kprogram'>프로그램</Link></li>
        <li className={twoDep === 3 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(3)}><Link to='/Kticket'>예매정보</Link></li>
        </ul>
    <LineTit subtit={'프로그램'}/>
    <ProgramK/>
    </>
  )
}

function Cpro(){
  const [oneDep, setOneDep] = useState(2);

  const [twoDep, setTwoDep] = useState(2);
    
  function clickOne(index){
      setOneDep(index);
  }

  function clickTwo(index){
    setTwoDep(index);
}
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <ul className="oneDep flex subDefaultContent">
         <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to='/Kinfo'>경복궁 별빛야행</Link></li>
         <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}><Link to='/Cinfo'>창덕궁 달빛기행</Link></li>
        </ul>
        <ul className="twoDep flex">
        <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(1)}><Link to='/Cinfo'>축제정보</Link></li>
        <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(2)}><Link to='/Cprogram'>프로그램</Link></li>
        <li className={twoDep === 3 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(3)}><Link to='/Cticket'>예매정보</Link></li>
        </ul>
    <LineTit subtit={'프로그램'}/>
    <ProgramC/>
    </>
  )
}

function Kticket(){
  const [oneDep, setOneDep] = useState(1);

  const [twoDep, setTwoDep] = useState(3);
    
  function clickOne(index){
      setOneDep(index);
  }

  function clickTwo(index){
    setTwoDep(index);
}
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <ul className="oneDep flex subDefaultContent">
         <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to='/Kinfo'>경복궁 별빛야행</Link></li>
         <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}><Link to='/Cinfo'>창덕궁 달빛기행</Link></li>
        </ul>
        <ul className="twoDep flex">
        <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(1)}><Link to='/Kinfo'>축제정보</Link></li>
        <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(2)}><Link to='/Kprogram'>프로그램</Link></li>
        <li className={twoDep === 3 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(3)}><Link to='/Kticket'>예매정보</Link></li>
        </ul>
    <LineTit subtit={'예매 안내'}/>
    <TicketK/>
    </>
  )
}

function Cticket(){
  const [oneDep, setOneDep] = useState(2);

  const [twoDep, setTwoDep] = useState(3);
    
  function clickOne(index){
      setOneDep(index);
  }

  function clickTwo(index){
    setTwoDep(index);
}
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <ul className="oneDep flex subDefaultContent">
         <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to='/Kinfo'>경복궁 별빛야행</Link></li>
         <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}><Link to='/Cinfo'>창덕궁 달빛기행</Link></li>
        </ul>
        <ul className="twoDep flex">
        <li className={twoDep === 1 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(1)}><Link to='/Cinfo'>축제정보</Link></li>
        <li className={twoDep === 2 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(2)}><Link to='/Cprogram'>프로그램</Link></li>
        <li className={twoDep === 3 ? "twoDeptit tcheck" : "twoDeptit"} onClick={()=>clickTwo(3)}><Link to='/Cticket'>예매정보</Link></li>
        </ul>
    <LineTit subtit={'예매 안내'}/>
    <TicketC/>
    </>
  )
}

export {Kinfo, Cinfo, Kpro, Cpro, Kticket, Cticket}