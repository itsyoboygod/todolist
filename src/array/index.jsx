import React from "react";
import { useState } from "react";

const ArrayList = () => {
    
    const [arrlist] = useState(['1' ,'2' ,'3' ,'4' ,'5' ,'6'])
    
    return(
        <>
            <div className="ArrayList">
                {arrlist.map((u)=>{
                    return(
                        <>
                            <li>{u}</li>
                        </>
                    )
                })}
            </div>
        </>
    )
}


export default ArrayList