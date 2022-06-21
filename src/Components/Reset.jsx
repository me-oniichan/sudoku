import { useContext } from "react";
import DupContext from "../Context/DupContext";
import GridContext from "../Context/GridContext";

export default function Reset() {
    const [val, setVal] = useContext(GridContext);
    const [dup, setDup] = useContext(DupContext);

    return (
        <button className="btn btn-warning btn-lg m-2" onClick={(e) => {
            setDup([]);
            setVal(new Array(9).fill(0).map(() => new Array(9).fill(0)));
        }}> Reset</button >
    )
}