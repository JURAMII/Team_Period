import './fesInfo.css'
import FesInfoComponent from '../../../components/fesInfoComponent'
import Kposter from '../../../assets/fesinfo_images/kPoster.png'
import Cposter from '../../../assets/fesinfo_images/cPoster.png'

const FesInfo = () => {


    let fesInfoConts = [
        {
            fTitle1:`경복궁`,
            fTitle2:`별빛야행`,
            fText1: `별 가득한밤,`,
            fText2: `경복궁 별빛야행에 여러분을 초대합니다.`,
            fImg: Kposter,
            id:'1',
            fCla:'fesInfo1'
        },
        {
            fTitle1: `창덕궁`,
            fTitle2: `달빛기행`,
            fText1: `은은한 달빛 아래,`,
            fText2: `창덕궁 달빛기행에 여러분을 초대합니다.`,
            fImg: Cposter,
            id:'2',
            fCla:'fesInfo2'
        },
    ]
    return(
        <>
        {fesInfoConts.map((fesInfoCont)=><FesInfoComponent key={fesInfoCont.id} fTitle1={fesInfoCont.fTitle1} 
        fTitle2={fesInfoCont.fTitle2} 
        fText1={fesInfoCont.fText1} 
        fText2={fesInfoCont.fText2} 
        fImg={fesInfoCont.fImg}
        fCla={fesInfoCont.fCla}/>)}
        </>
    )
}

export default FesInfo