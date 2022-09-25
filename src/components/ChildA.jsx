import React, { useState } from 'react'
import { useContext } from "react";
import { FirstName } from "../App";
const style={
  format:{
    marginLeft:'550px',
    border: '2px solid black',
    marginRight:'550px',
    marginTop:'20px'
  },
  sec:{
    fontSize:'20px',
    fontWeight:'800',
    color:'white'
  },
  input:{
    padding:'10px 10px',
    width:'80%',
    borderRadius:'5px',
    fontSize:'19px'
  },
  btn:{
    padding:'10px 10px',
    width:'40%',
    color:'white',
    background:'red',
    marginLeft:'70px',
    fontSize:'19px',
    alignItems:'center'
  }
}
function ChildD(props) {

  const [val, setVal] = useState("red")
  const user = useContext(FirstName);
  const [{ name, age, addr }, handleChange, { color }, handleClick] = user;
  console.log("val", val)
  function handleVal(e) {
    setVal(e.target.value);

  }

  return (

    <div style={{background:color}}>
      <div style={style.format}>
      <div style={style.sec} >
        <p ><span>Name:</span>{name}</p>
        <p><span>age:</span>{age}</p>
        <p><span>address:</span>{addr}</p>
      </div>
      <button style={style.btn} onClick={() => handleChange({ 'name': "dog", age: 20, 'addr': "any" })}>Text change</button><br></br>
      <input style={style.input} type="text" value={val} onChange={handleVal} />
   
      <button style={style.btn} onClick={() => handleClick(val)}>color change</button>
      </div>
    </div>

  )
}

export default ChildD