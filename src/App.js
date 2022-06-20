import { useState } from "react";
import "./App.css";
import Grid from "./Components/Grid";
import SolveButton from "./Components/SolveBtn";
import DupContext from "./Context/DupContext";
import GridContext from "./Context/GridContext";

function App() {
  const grid = useState(new Array(9).fill(0).map(() => new Array(9).fill(0)));
  const dup = useState([]);
  return (
    <GridContext.Provider value={grid}>
      <DupContext.Provider value={dup}>
        <div className="App">
          <Grid />
          <SolveButton />
        </div>
      </DupContext.Provider>
    </GridContext.Provider>
  );
}

export default App;
