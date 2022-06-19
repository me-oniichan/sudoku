import { useState } from "react";

export default function Grid() {
    const [vals, setVals] = useState(new Array(9).fill(new Array(9).fill("")));

    function putData(ind1, ind2, key) {
        setVals(()=>{vals[ind1][ind2] = isNaN(key)? "": key; return vals})
        console.log(isNaN(key))
    }

    let i = 0;
    return (
        <div className="grid" id="grid">
            {
                vals.map((val, ind1) => (
                    val.map((cell, ind2) => (   
                        <div className="cell" key={i} id={i++} style={{
                            borderTopLeftRadius: `${ind1 === 0 && ind2 === 0 ? "10px" : "0"}`,
                            borderBottomLeftRadius: `${ind1 === 8 && ind2 === 0 ? "10px" : "0"}`,
                            borderTopRightRadius: `${ind1 === 0 && ind2 === 8 ? "10px" : "0"}`,
                            borderBottomRightRadius: `${ind1 === 8 && ind2 === 8 ? "10px" : "0"}`,
                            borderRightWidth: `${ind2 % 3 === 2 ? "3px" : "1px"}`,
                            borderBottomWidth: `${ind1 % 3 === 2 ? "3px" : "1px"}`
                        }}
                        ><input type="number" className="cell-input" maxLength={1} value={vals[ind1][ind2] === ""? "": vals[ind1][ind2]} onInput={e => (putData(ind1, ind2, e.nativeEvent.data))} /></div>
                    ))
                ))
            }
        </div>
    )
}
