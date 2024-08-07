import './Demo.css'
import React from 'react'
import juliu from '../../assets/image-juliusomo.png'
import { useState } from 'react'
const Demo = (props) => {
    const[inputvalue,setinputvalue]=useState('')
    const handleonclick=()=>{
        props.newpost(inputvalue)
        setinputvalue('')
    }
    const handleonchange=(event)=>{
        setinputvalue(event.target.value)
    }
  return (
    <div id='input'>
      <img src={juliu} id='image'/>
        <input value={inputvalue} onChange={handleonchange} placeholder='Add Comment'></input>
        <button onClick={handleonclick} id='sendbtn'>SEND</button>
    </div>
  )
}
export default Demo