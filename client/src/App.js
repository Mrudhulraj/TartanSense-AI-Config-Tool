import React,{useEffect, useState} from 'react'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Config from './pages/config';
import Accordion from './components/Accordion'
import './App.css'

function App (){
  const [data,setData]=useState([])
  
  function reset(){
    window.location.reload()
  }
  
  useEffect(()=>{
    fetch('/config',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then((result) => result.json())
    .then((result) => setData(result.data))
  },[])
  
  async function save(){
    
    let final=[];
            let forms = document.getElementsByTagName('form');
            
            for(let i=0;i<forms.length;i++){
                for(let j=0;j<forms[i].length;j++){
                    final.push({value:forms[i][j].value});
                }
            }
            console.log(final);
            await fetch('/config', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(final)
              });
        }

  
  return (
    <div>
      <div className="header">
      <h1>Weeder Configure </h1 >
      </div>
      {data.map((accordion_data)=>(
        <Accordion key = {accordion_data.header} header = {accordion_data.header} body = {accordion_data.body}/>
      ))}
      <Router>
        <Routes>
          <Route path="/config" element={<Config/>}></Route>
        </Routes>
      </Router>
      <button className="save" type="button" onClick={save}>Save</button>
      <button className="reset" type="button" onClick={reset}>Reset</button>
    </div>
  )
}

export default App