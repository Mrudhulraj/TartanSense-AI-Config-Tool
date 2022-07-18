import React,{useState} from 'react'
import './Accordion.css'
import InputComponent from './InputComponent'

function Accordion({header, body}){

    const [isOpened,setIsOpened]=useState(false)

    return (
    <div>
      <button className="accordion" onClick={()=>{
        setIsOpened(!isOpened)
      }}>{header}</button>
      <div className={!isOpened && "panel"}>
        <form id="actuator1" method="post" className="formData">
            {body.map((formData) => (
              <InputComponent key={formData.display} display={formData.display} inputValue = {formData.value} />
            ))}
      </form>
    </div>
    </div>
    
  )
  }


export default Accordion