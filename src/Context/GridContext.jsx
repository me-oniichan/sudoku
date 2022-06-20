import { createContext } from "react";

const GridContext = createContext([new Array(9).fill(new Array(9).fill("")), ()=>{}])
export default GridContext;