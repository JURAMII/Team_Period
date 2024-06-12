import { useState } from "react";

const News = ({createEvent})=>{
    const[edit, setEdits]=useState({
      gallTit : '',
        gallTxT : ''
      })
  const {gallTit, gallTxT} = edit; 
  function changeTxt(e){
    const {name, value}=e.target
    setEdits({
      ...edit,
      [name] : value
    })
  };
  const clickTxt = ()=>{
    
    createEvent(gallTit, gallTxT)
  }

    return(
      <>
        <div>
            <input type="text"name="gallTit"value={gallTit} onChange={changeTxt}></input>
            <input type="text"name="gallTxT"value={gallTxT}onChange={changeTxt}></input>
            <button onClick={clickTxt}>저장</button>
        </div>
      </>
    )
}

export default News;