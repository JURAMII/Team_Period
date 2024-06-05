import '../pages/main/sec3-5_fseInfo/fesInfo.css'

const FesInfoComponent = ({fTitle, fText, fImg}) => {


    return(    
    <section className='defaultContent fesInfoSec fesInfoSec2'>
        <div className='flex fesInfoWrap'>
        <div><img src={fImg} alt="포스터"/></div>
        <div className='fesInfoTxt'>
            <h2>{fTitle}</h2>
            <p>{fText}</p>
        </div>
       </div>
    </section>
    )
}

export default FesInfoComponent