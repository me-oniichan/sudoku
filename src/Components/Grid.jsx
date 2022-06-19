import { useState } from "react";

export default function Grid(){
    const [vals, setVals] = useState(new Array(9).fill( new Array(9).fill(-1)));
    return(
        <div className="grid" id="grid">
            {
                vals.map((value, ind1) =>(
                    value.map((cell, ind2)=>(
                        <div className="cell text-bg-warning" key={ind1.toString() +ind2.toString()}><span>{cell}</span></div>
                    ))
                ))
            }
        </div>
    )
}
