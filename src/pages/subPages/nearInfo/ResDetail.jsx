
const ResDetail = ({datas})=>{
    return(
<>
    
        {datas.map((data)=>
        <div key={data.id} className="galTop">
        <h2>{data.gallTit}</h2>
        <img src={data.img} alt={data.gallTit} />
        <pre>{data.gallTxT}</pre>
        </div>
        )}
        
</>

    )
}

export default ResDetail;