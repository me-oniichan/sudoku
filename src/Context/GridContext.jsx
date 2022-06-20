import { createContext } from "react";

const GridContext = createContext([new Array(9).fill(0).map(() => new Array(9).fill(0)), () => { }])
export default GridContext;