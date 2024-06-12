import { SubFesInfoK, SubFesInfoC, ProgramK, ProgramC, TicketK, TicketC } from "./subFesInfoCom"
import SupTop from "../../../components/common/supTop"
import LineTit from "../../../components/lineTit"
import {InfoDep, InfoDep2, InfoDep3}  from "./infoDep";
import ScrollToTop from "../../../scroll";

function Kinfo(){


    return(
        <>
        <ScrollToTop>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <InfoDep one={1}/>
        <InfoDep2 one={1}/>
        <LineTit subtit={'축제정보'}/>
        <SubFesInfoK/>
        </ScrollToTop>
        </>
    )
}

function Cinfo(){

    return(
        <>
        <ScrollToTop>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <InfoDep one={2}/>
        <InfoDep3 one={1}/>
        <LineTit subtit={'축제정보'}/>
        <SubFesInfoC/>
        </ScrollToTop>
        </>
    )
}

function Kpro(){
  
  return(
    <>
    <ScrollToTop>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <InfoDep one={1}/>
    <InfoDep2 one={2}/>
    <LineTit subtit={'프로그램'}/>
    <ProgramK/>
    </ScrollToTop>
    </>
  )
}

function Cpro(){
 
  return(
    <>
    <ScrollToTop>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <InfoDep one={2}/>
    <InfoDep3 one={2}/>
    <LineTit subtit={'프로그램'}/>
    <ProgramC/>
    </ScrollToTop>
    </>
  )
}

function Kticket(){
 
  return(
    <>
    <ScrollToTop>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <InfoDep one={1}/>
    <InfoDep2 one={3}/>
    <LineTit subtit={'예매 안내'}/>
    <TicketK/>
    </ScrollToTop>
    </>
  )
}

function Cticket(){
 
  return(
    <>
    <ScrollToTop>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <InfoDep one={2}/>
    <InfoDep3 one={3}/>
    <LineTit subtit={'예매 안내'}/>
    <TicketC/>
    </ScrollToTop>
    </>
  )
}

export {Kinfo, Cinfo, Kpro, Cpro, Kticket, Cticket}