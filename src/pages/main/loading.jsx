import LoadingImg from '../../assets/loading.gif';
import './load.css';

const Loading = () => {

    return(
        <div className="load">
            <img src={LoadingImg} alt="loading" />
        </div>
    )
}

export default Loading