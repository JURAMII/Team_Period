import Footer from "../../components/common/footer/footer"
import FesInfoStart from "./sec3-5_fesInfo/fesInfoStart"
import FesInfo from "./sec3-5_fesInfo/fesInfo"
import MainNoti from "./Sec6NotiList/mainNoti"
import Three from "./Sec1 3D/Three"


const Main = () =>{
    return(
        <>
        <Three></Three>
         <FesInfoStart/>
         <FesInfo/>
         <MainNoti/>
        </>
    )
}

export default Main