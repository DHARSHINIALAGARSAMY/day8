import React,{useState,useEffect} from 'react';

function Hooks()
{
    const [message,setMessage]=useState("I am so glad you are getting out of this place!")
    useEffect(()=>{
        console.log("use effect hook called")
        setTimeout(()=>{
            setMessage("You made every day in this place so much brighter")
        },2000)
    })
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default Hooks;