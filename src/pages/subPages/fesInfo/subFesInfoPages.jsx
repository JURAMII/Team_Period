import { SubFesInfoK, SubFesInfoC, ProgramK, ProgramC, TicketK, TicketC } from "./subFesInfoCom"
import SupTop from "../../../components/common/supTop"
import LineTit from "../../../components/lineTit"
import {InfoDep, InfoDep2, InfoDep3}  from "./infoDep";

function Kinfo(){


    return(
        <>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <InfoDep one={1}/>
        <InfoDep2 one={1}/>
        <LineTit subtit={'축제정보'}/>
        <SubFesInfoK/>
        </>
    )
}

function Cinfo(){

    return(
        <>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <InfoDep one={2}/>
        <InfoDep3 one={1}/>
        <LineTit subtit={'축제정보'}/>
        <SubFesInfoC/>
        </>
    )
}

function Kpro(){
  
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <InfoDep one={1}/>
    <InfoDep2 one={2}/>
    <LineTit subtit={'프로그램'}/>
    <ProgramK/>
    </>
  )
}

function Cpro(){
 
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <InfoDep one={2}/>
    <InfoDep3 one={2}/>
    <LineTit subtit={'프로그램'}/>
    <ProgramC/>
    </>
  )
}

function Kticket(){
 
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <InfoDep one={1}/>
    <InfoDep2 one={3}/>
    <LineTit subtit={'예매 안내'}/>
    <TicketK/>
    </>
  )
}

function Cticket(){
 
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <InfoDep one={2}/>
    <InfoDep3 one={3}/>
    <LineTit subtit={'예매 안내'}/>
    <TicketC/>
    </>
  )
}

export {Kinfo, Cinfo, Kpro, Cpro, Kticket, Cticket}