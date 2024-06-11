// import Footer from "../../components/common/footer/footer"
import Three from '../main/Sec1 3D/Three'
import AllMenuPage from "../../components/common/allMenuPage/allMenu"
import FesInfoStart from "./sec3-5_fesInfo/fesInfoStart"
import FesInfo from "./sec3-5_fesInfo/fesInfo"
import MainNoti from "./Sec6NotiList/mainNoti"
import MainGallery from "./Sec7_Gallery/mainGallery"


const Main = () =>{
    return(
        <>
         <Three />
         <FesInfoStart/>
         <FesInfo/>
         <MainNoti/>
         <MainGallery/>
        </>
    )
}

export default Main;