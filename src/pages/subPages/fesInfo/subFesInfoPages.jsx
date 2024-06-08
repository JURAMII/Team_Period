import { SubFesInfoK, SubFesInfoC, ProgramK, ProgramC, TicketK, TicketC } from "./subFesInfoCom"
import OneDep from "../../../components/onedep"
import SupTop from "../../../components/common/supTop"

function Kinfo(){
    return(
        <>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <OneDep subtit1={'경복궁 별빛야행'} subtit2={'창덕궁 달빛기행'} links1={'/Kinfo'} links2={'/Cinfo'}/>
        <SubFesInfoK/>
        </>
    )
}

function Cinfo(){
    return(
        <>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <OneDep subtit1={'경복궁 별빛야행'} subtit2={'창덕궁 달빛기행'} links1={'/Kinfo'} links2={'/Cinfo'}/>
        <SubFesInfoC/>
        </>
    )
}

function Kpro(){
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <OneDep subtit1={'경복궁 별빛야행'} subtit2={'창덕궁 달빛기행'} links1={'/Kinfo'} links2={'/Cinfo'}/>
    <ProgramK/>
    </>
  )
}

function Cpro(){
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <OneDep subtit1={'경복궁 별빛야행'} subtit2={'창덕궁 달빛기행'} links1={'/Kinfo'} links2={'/Cinfo'}/>
    <ProgramC/>
    </>
  )
}

function Kticket(){
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <OneDep subtit1={'경복궁 별빛야행'} subtit2={'창덕궁 달빛기행'} links1={'/Kinfo'} links2={'/Cinfo'}/>
    <TicketK/>
    </>
  )
}

function Cticket(){
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <OneDep subtit1={'경복궁 별빛야행'} subtit2={'창덕궁 달빛기행'} links1={'/Kinfo'} links2={'/Cinfo'}/>
    <TicketC/>
    </>
  )
}

export {Kinfo, Cinfo, Kpro, Cpro, Kticket, Cticket}