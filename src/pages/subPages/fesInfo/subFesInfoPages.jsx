import { SubFesInfoK, SubFesInfoC, ProgramK, ProgramC, TicketK, TicketC } from "./subFesInfoCom"
import OneDep from "../../../components/onedep"
import TwoDep from "../../../components/twodep"
import SupTop from "../../../components/common/supTop"
import LineTit from "../../../components/lineTit"

function Kinfo(){
    return(
        <>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <OneDep subtit1={'경복궁 별빛야행'} subtit2={'창덕궁 달빛기행'} links1={'/Kinfo'} links2={'/Cinfo'}/>
        <TwoDep Tlinks1={'/Kinfo'} Tlinks2={'/Kprogram'} Tlinks3={'/Kticket'} Tsubtit1={'축제정보'} Tsubtit2={'프로그램'} Tsubtit3={'예매안내'}/>
        <LineTit subtit={'축제정보'}/>
        <SubFesInfoK/>
        </>
    )
}

function Cinfo(){
    return(
        <>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <OneDep subtit1={'경복궁 별빛야행'} subtit2={'창덕궁 달빛기행'} links1={'/Kinfo'} links2={'/Cinfo'}/>
        <TwoDep Tlinks1={'/Cinfo'} Tlinks2={'/Cprogram'} Tlinks3={'/Cticket'} Tsubtit1={'축제정보'} Tsubtit2={'프로그램'} Tsubtit3={'예매안내'}/>
        <LineTit subtit={'축제정보'}/>
        <SubFesInfoC/>
        </>
    )
}

function Kpro(){
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <OneDep subtit1={'경복궁 별빛야행'} subtit2={'창덕궁 달빛기행'} links1={'/Kinfo'} links2={'/Cinfo'}/>
    <TwoDep Tlinks1={'/Kinfo'} Tlinks2={'/Kprogram'} Tlinks3={'/Kticket'} Tsubtit1={'축제정보'} Tsubtit2={'프로그램'} Tsubtit3={'예매안내'}/>
    <LineTit subtit={'프로그램'}/>
    <ProgramK/>
    </>
  )
}

function Cpro(){
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <OneDep subtit1={'경복궁 별빛야행'} subtit2={'창덕궁 달빛기행'} links1={'/Kinfo'} links2={'/Cinfo'}/>
    <TwoDep Tlinks1={'/Cinfo'} Tlinks2={'/Cprogram'} Tlinks3={'/Cticket'} Tsubtit1={'축제정보'} Tsubtit2={'프로그램'} Tsubtit3={'예매안내'}/>
    <LineTit subtit={'프로그램'}/>
    <ProgramC/>
    </>
  )
}

function Kticket(){
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <OneDep subtit1={'경복궁 별빛야행'} subtit2={'창덕궁 달빛기행'} links1={'/Kinfo'} links2={'/Cinfo'}/>
    <TwoDep Tlinks1={'/Kinfo'} Tlinks2={'/Kprogram'} Tlinks3={'/Kticket'} Tsubtit1={'축제정보'} Tsubtit2={'프로그램'} Tsubtit3={'예매안내'}/>
    <LineTit subtit={'예매 안내'}/>
    <TicketK/>
    </>
  )
}

function Cticket(){
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <OneDep subtit1={'경복궁 별빛야행'} subtit2={'창덕궁 달빛기행'} links1={'/Kinfo'} links2={'/Cinfo'}/>
    <TwoDep Tlinks1={'/Cinfo'} Tlinks2={'/Cprogram'} Tlinks3={'/Cticket'} Tsubtit1={'축제정보'} Tsubtit2={'프로그램'} Tsubtit3={'예매안내'}/>
    <LineTit subtit={'예매 안내'}/>
    <TicketC/>
    </>
  )
}

export {Kinfo, Cinfo, Kpro, Cpro, Kticket, Cticket}