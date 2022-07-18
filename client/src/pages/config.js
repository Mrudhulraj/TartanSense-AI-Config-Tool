import React ,{useState,useEffect}from 'react'


function Config() {
    const [data,setData]=useState([])

    useEffect(() => {
        fetch('/config',{
                  headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }
                }).then((result) => result.json())
                .then((result) => {
                    console.log(result)
                    setData(result)
                })
    }, [])
        return (
    <div>
        {data}
    </div>)
}

export default Config