import { SubFesInfoK, SubFesInfoC, ProgramK, ProgramC, TicketK, TicketC } from "./subFesInfoCom"
import OneDep from "../../../components/onedep"
import TwoDep from "../../../components/twodep"
import SupTop from "../../../components/common/supTop"
import LineTit from "../../../components/lineTit"

const OsubTits = ['경복궁 별빛야행','창덕궁 달빛기행']
const Olinks = ['/Kinfo', '/Cinfo']
const TsubTits = ['축제정보', '프로그램', '예매안내']
const Tlinks1 = ['/Kinfo', '/Kprogram', '/Kticket']
const Tlinks2 = ['/Cinfo', '/Cprogram', '/Cticket']

function Kinfo(){
    return(
        <>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <OneDep OsubTits={OsubTits} Olinks={Olinks}/>
        <TwoDep TsubTits = {TsubTits} Tlinks = {Tlinks1} />
        <LineTit subtit={'축제정보'}/>
        <SubFesInfoK/>
        </>
    )
}

function Cinfo(){
    return(
        <>
        <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
        <OneDep OsubTits={OsubTits} Olinks={Olinks}/>
        <TwoDep TsubTits = {TsubTits} Tlinks = {Tlinks2} />
        <LineTit subtit={'축제정보'}/>
        <SubFesInfoC/>
        </>
    )
}

function Kpro(){
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <OneDep OsubTits={OsubTits} Olinks={Olinks}/>
    <TwoDep TsubTits = {TsubTits} Tlinks = {Tlinks1} />
    <LineTit subtit={'프로그램'}/>
    <ProgramK/>
    </>
  )
}

function Cpro(){
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <OneDep OsubTits={OsubTits} Olinks={Olinks}/>
    <TwoDep TsubTits = {TsubTits} Tlinks = {Tlinks2} />
    <LineTit subtit={'프로그램'}/>
    <ProgramC/>
    </>
  )
}

function Kticket(){
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <OneDep OsubTits={OsubTits} Olinks={Olinks}/>
    <TwoDep TsubTits = {TsubTits} Tlinks = {Tlinks1} />
    <LineTit subtit={'예매 안내'}/>
    <TicketK/>
    </>
  )
}

function Cticket(){
  return(
    <>
    <SupTop supTopImg={'subFesInfoImage'} supTopTit={'축제소개'}/>
    <OneDep OsubTits={OsubTits} Olinks={Olinks}/>
    <TwoDep TsubTits = {TsubTits} Tlinks = {Tlinks2} />
    <LineTit subtit={'예매 안내'}/>
    <TicketC/>
    </>
  )
}

export {Kinfo, Cinfo, Kpro, Cpro, Kticket, Cticket}