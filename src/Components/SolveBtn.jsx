import { useContext } from "react";
import DupContext from "../Context/DupContext";
import GridContext from "../Context/GridContext";
import { solveGrid } from "./utils";

export default function SolveButton() {
    const [val, setVal] = useContext(GridContext);
    const dup = useContext(DupContext)[0];
    return (
        <button className="btn btn-primary btn-lg m-2" onClick={() => {
            if (dup.length !== 0) {
                console.log("duplicate elements");
                return;
            }
            
            let grid = solveGrid(val, 0, 0);
            if (grid) setVal(grid);
        }}
        >Solve</button>
    )
}