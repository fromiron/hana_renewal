import React, {useState} from "react";

function index (){

    const [a, setA] = useState(false);
    const toggle = ()=>{
        console.log(a);
        setA(function(a){
            return !a;
        })
    }

    return(
        <div>
            test
            <button onClick={toggle} >ss</button>
        </div>
    )

}

export default index;