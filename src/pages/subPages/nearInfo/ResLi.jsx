import './GallList.css'

const List = ({datas})=>{
    return(
    <div className='gall subDefaultContent'>
            {datas.map((data)=><figure key={data.id}>
                <img src={data.img} alt={data.gallTit} />
                <figcaption className='gall_txt'>
                <b>{data.gallTit}</b>
                <p>{data.gallTxT}</p>                    
                </figcaption>
            </figure>)}
    </div>       
    )
}
export default List;