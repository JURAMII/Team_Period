import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../../components/onedep.css'

const FaqDep = ({one}) =>{

    const [oneDep, setOneDep] = useState(one);

    function clickOne(index){
        setOneDep(index);
    }

    return(
        <ul className="oneDep flex subDefaultContent">
        <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to='/Faq'>자주하는 질문</Link></li>
        <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}> <Link to="/QnaList/category/qna">묻고 답하기</Link></li>
       </ul>
    )
}

export default FaqDep
