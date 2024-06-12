import {useCallback,useReducer,useRef} from 'react';
import {Contents, Reducer} from './ResDb';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import List from './ResLi';
import News from './ResNew';
import ResDetail from './ResDetail';


function ResPage() {
  const [oneDep, setOneDep] = useState(2);
    
  function clickOne(index){
      setOneDep(index);
  }  
    const [state, dispach] = useReducer(Reducer,Contents);
    const {datas} = state;
    const {gallTxT,gallTit} = state.inputs;
    let addId = useRef(5);
  
  const createEvent = useCallback((gallTit, gallTxT)=>{
    dispach({
      type: 'create',
      data : {
        img,
        gallTit ,
        gallTxT  ,
        id :addId.current
      }
    })
    addId.cuttent += 1;
  },[state])
  
  const deleteEvent = (id)=>{
    dispach({
      type : 'delete',
      id
    })
  }
  
  const updateEvent = (id,img,gallTit,gallTxT)=>{
    dispach({
      type : 'update',
      id,img,gallTit,gallTxT
    })
  
  }
    return (
      <>
        <ul className="oneDep flex subDefaultContent">
         <li className={oneDep === 1 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(1)}> <Link to='/Way'>오시는길</Link></li>
         <li className={oneDep === 2 ? "oneDeptit check" : "oneDeptit"} onClick={() => clickOne(2)}><Link to='/ResPage'>주변안내</Link></li>
        </ul>
      <section>
        <News createEvent={createEvent}/>
        <List datas={datas}/>
      </section>
      </>
    );
}
export default ResPage;