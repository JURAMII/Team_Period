import './fesInfo.css'
import FesInfoComponent from '../../../components/fesInfoComponent'
import kPoster from '../../../assets/kPoster.png'
import cPoster from '../../../assets/cPoster.png'

const FesInfo = () => {

    let fesInfoConts = [
        {
            fTitle:`경복궁\n별빛야행`,
            fText: `별 가득한밤,\n경복궁 별빛야행에 여러분을 초대합니다.`,
            fImg: kPoster,
            id:'1'
        },
        {
            fTitle: `창덕궁\n달빛기행`,
            fText: `은은한 달빛 아래,\n창덕궁 달빛기행에 여러분을 초대합니다.`,
            fImg: cPoster,
            id:'2'
        },
    ]
    return(
        <>
        {fesInfoConts.map((fesInfoCont)=><FesInfoComponent key={fesInfoCont.id} fTitle={fesInfoCont.fTitle} fText={fesInfoCont.fText} fImg={fesInfoCont.fImg}/>)}
        </>
    )
}

export default FesInfo