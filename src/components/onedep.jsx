import './onedep.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const OneDep = (props) => {

        const [oneDep, setOneDep] = useState(1);
    
        function clickOne(index){
            setOneDep(index);
        }

    

    return(
        <>
        <ul className='oneDep flex subDefaultContent'>
        <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to= {props.links1}>{props.subtit1}</Link></li>
        <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to= {props.links1}>{props.subtit1}</Link></li>
        <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to= {props.links1}>{props.subtit1}</Link></li>
       </ul>
        </>
       

    )

}


export default OneDep;

// import './onedep.css'
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const OneDep = ({OsubTits, Olinks}) => {

//     const [oneDep, setOneDep] = useState(0);

//     function clickOne(index){
//         setOneDep(index);
//     }

//     return(
//         <ul className='oneDep flex subDefaultContent'>
//           {OsubTits.map((OsubTit,index)=><li key={index} className={oneDep === index ? "oneDeptit check" : "oneDeptit"} onClick={()=>clickOne(index)}>{OsubTit}</li>)}
//        </ul>
//     )

// }


// export default OneDep;