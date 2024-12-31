import { useEffect, useRef,useState } from "react";
var UseRef=()=>{
    var[text,setText]=useState("");
    var prevText=useRef("");
    useEffect(()=>{
        prevText.current=text;
    },[text]);
    return(
        <div>
            <h1>This is an example of useRef</h1>
            <input type="text" value={text} onChange={(e)=>setText (e.target.value)}></input>
            <h2>My Current render is {text}</h2>
            <h2>My previous Render is {prevText.current}</h2>
        </div>
    );
    
};  
export default UseRef;