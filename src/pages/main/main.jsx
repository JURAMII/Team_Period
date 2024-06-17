import Three from '../main/Sec1 3D/Three'
import FesInfoStart from "./sec3-5_fesInfo/fesInfoStart"
import FesInfo from "./sec3-5_fesInfo/fesInfo"
import MainNoti from "./Sec6NotiList/mainNoti"
import MainGallery from "./Sec7_Gallery/mainGallery"
import MainVideo from './mainVideo'
import Loadig from './loading'




const Main = () =>{

  
    return(
        <>
         <Loadig/>
         <Three/>
         <FesInfoStart/>
         <FesInfo/>
         <MainVideo/>
         <MainNoti/>
         <MainGallery/>
         </>
    )
}

export default Main;