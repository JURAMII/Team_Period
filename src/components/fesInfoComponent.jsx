import '../pages/main/sec3-5_fseInfo/fesInfo.css'

const FesInfoComponent = ({fTitle1, fTitle2, fText1, fText2, fImg, fCla}) => {
    
    return(    
    <section className='defaultContent fesInfoSec fesInfoSec2'>
        <div className={`flex fesInfoWrap ${fCla}`}>
        <div><img src={fImg} alt="포스터"/></div>
        <div className='fesInfoTxt'>
            <div>
            <h2>{fTitle1}</h2>
            <h2>{fTitle2}</h2>
            </div>
            <div>
            <p>{fText1}</p>
            <p>{fText2}</p>
            </div>
            <input className="mainBtnSalomie fesInfoBtn" type ="button" value="자세히 보기"/>
        </div>
       </div>
    </section>
    )
}

export default FesInfoComponent