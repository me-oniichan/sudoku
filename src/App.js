import { useState } from "react";
import "./App.css";
import Grid from "./Components/Grid";
import GridContext from "./Context/GridContext";

function App() {
  const grid = useState(new Array(9).fill(new Array(9).fill("")));
  return (
    <GridContext.Provider value={grid}>
      <div className="App">
        <Grid />
      </div>
    </GridContext.Provider>
  );
}

export default App;
