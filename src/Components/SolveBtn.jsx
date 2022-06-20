import { useContext } from "react";
import DupContext from "../Context/DupContext";
import GridContext from "../Context/GridContext";
import { solveGrid } from "./utils";

export default function SolveButton() {
  const [val, setVal] = useContext(GridContext);
  const dup = useContext(DupContext)[0];

  return (
    <button
      className={
        dup.length === 0
          ? "btn btn-primary btn-lg m-2"
          : "btn btn-danger btn-lg m-2"
      }
      onClick={() => {
        if (dup.length !== 0) return;

        let grid = solveGrid(val, 0, 0);
        if (grid) setVal(val.map((v1, i) => (v1.map((v2, j) => (grid[i][j])))))
      }}
    >
      Solve <sub>{`${dup.length === 0 ? "" : "Invalid Puzzel"}`}</sub>
    </button>
  );
}
