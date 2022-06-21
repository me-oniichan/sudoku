import { useContext } from "react";
import DupContext from "../Context/DupContext";
import GridContext from "../Context/GridContext";

export default function Reset() {
    const setVal = useContext(GridContext)[1];
    const setDup = useContext(DupContext)[1];

    return (
        <button className="btn btn-warning btn-lg m-2" onClick={(e) => {
            setDup([]);
            setVal(new Array(9).fill(0).map(() => new Array(9).fill(0)));
        }}> Reset</button >
    )
}