import {SubFesInfoK, SubFesInfoC, ProgramK, ProgramC, TicketK, TicketC} from "../../components/subFesInfoCom"

const SubFesInfo = () =>{
    return(
        <>
        <div className="subTop subFesInfoImage">
          <p className="subTopText">축제소개</p>
        </div>
        {/* <SubFesInfoK/>
        <SubFesInfoC/> */}
        {/* <ProgramK/>
        <ProgramC/> */}
        <TicketK/>
        <TicketC/>
        </>
    )
}

export default SubFesInfo