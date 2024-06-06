import './lineTit.css'

const LineTit = (props) =>{

    return(
        <div className='greenLine calcWidth'>
             <p className='greenTit'>{props.subtit}</p>
        </div>
    )
}

export default LineTit