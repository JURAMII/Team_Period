import { SubFesInfoK, SubFesInfoC, ProgramK, ProgramC, TicketK, TicketC } from "./subFesInfoCom"
import SupTop from "../../../components/common/supTop"
import LineTit from "../../../components/lineTit"
import {InfoDep, InfoDep2, InfoDep3}  from "./infoDep";
import InfoScroll from "./InfoScroll";

function Kinfo(){


    return(
        <>
        <InfoScroll>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <InfoDep one={1}/>
        <InfoDep2 one={1}/>
        <LineTit subtit={'축제정보'}/>
        <SubFesInfoK/>
        </InfoScroll>
        </>
    )
}

function Cinfo(){

    return(
        <>
        <InfoScroll>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <InfoDep one={2}/>
        <InfoDep3 one={1}/>
        <LineTit subtit={'축제정보'}/>
        <SubFesInfoC/>
        </InfoScroll>
        </>
    )
}

function Kpro(){
  
  return(
    <>
    <InfoScroll>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <InfoDep one={1}/>
    <InfoDep2 one={2}/>
    <LineTit subtit={'프로그램'}/>
    <ProgramK/>
    </InfoScroll>
    </>
  )
}

function Cpro(){
 
  return(
    <>
    <InfoScroll>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <InfoDep one={2}/>
    <InfoDep3 one={2}/>
    <LineTit subtit={'프로그램'}/>
    <ProgramC/>
    </InfoScroll>
    </>
  )
}

function Kticket(){
 
  return(
    <>
    <InfoScroll>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <InfoDep one={1}/>
    <InfoDep2 one={3}/>
    <LineTit subtit={'예매 안내'}/>
    <TicketK/>
    </InfoScroll>
    </>
  )
}

function Cticket(){
 
  return(
    <>
    <InfoScroll>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <InfoDep one={2}/>
    <InfoDep3 one={3}/>
    <LineTit subtit={'예매 안내'}/>
    <TicketC/>
    </InfoScroll>
    </>
  )
}

export {Kinfo, Cinfo, Kpro, Cpro, Kticket, Cticket}