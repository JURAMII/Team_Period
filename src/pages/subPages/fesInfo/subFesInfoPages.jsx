import { SubFesInfoK, SubFesInfoC, ProgramK, ProgramC, TicketK, TicketC } from "./subFesInfoCom"
import SupTop from "../../../components/common/supTop"
import {InfoDep, InfoDep2, InfoDep3}  from "./infoDep";

function Kinfo(){


    return(
        <>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <InfoDep one={1}/>
        <InfoDep2 one={1}/>
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
    <TicketC/>
    </>
  )
}

export {Kinfo, Cinfo, Kpro, Cpro, Kticket, Cticket}