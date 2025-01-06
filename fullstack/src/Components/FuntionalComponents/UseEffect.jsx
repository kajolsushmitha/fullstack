import { useEffect, useState } from "react";
var UseEffect=()=>
{
    var[text,setText] = useState("kongu");
    useEffect(()=>{
        setText("KEC")
    },[])
        return(
            <section>
                <h1>
                    Example of UseEffect
                </h1>
                <input type="text " placeholder="Enter your text here" value={text} onChange={(e)=>{setText(e.target.value)}}></input>
                <h2>Text typed are displayed here{text}</h2>
            </section>
        );
}
export default UseEffect;