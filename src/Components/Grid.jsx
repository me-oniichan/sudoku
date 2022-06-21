import { useContext } from "react";
import DupContext from "../Context/DupContext";
import GridContext from "../Context/GridContext";
import { check } from "./utils";

export default function Grid() {
  const [vals, setVals] = useContext(GridContext);
  const [dups, setDups] = useContext(DupContext);

  function verify(grid, row, col, val) {
    //return true if found more than one
    if (val === 0) return 1;
    let count = 0;
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === val) count++;
    }
    if (count > 1) return 1;
    count = 0;
    for (let i = 0; i < 9; i++) {
      if (grid[i][col] === val) count++;
    }

    if (count > 1) return 1;
    count = 0;

    for (let i = 0; i < 3; i++) {
      if (row < 3 && col < 3) {
        for (let j = 0; j < 3; j++) {
          if (grid[i][j] === val) count++;
        }
      }
      else if (row < 3 && col < 6) {
        for (let j = 0; j < 3; j++) {
          if (grid[i][j + 3] === val) count++;
        }
      }
      else if (row < 3 && col < 9) {
        for (let j = 0; j < 3; j++) {
          if (grid[i][j + 6] === val) count++;
        }
      }
      else if (row < 6 && col < 3) {
        for (let j = 0; j < 3; j++) {
          if (grid[i + 3][j] === val) count++;
        }
      }
      else if (row < 6 && col < 6) {
        for (let j = 0; j < 3; j++) {
          if (grid[i + 3][j + 3] === val) count++;
        }
      }
      else if (row < 6 && col < 9) {
        for (let j = 0; j < 3; j++) {
          if (grid[i + 3][j + 6] === val) count++;
        }
      }
      else if (row < 9 && col < 3) {
        for (let j = 0; j < 3; j++) {
          if (grid[i + 6][j] === val) count++;
        }
      }
      else if (row < 9 && col < 6) {
        for (let j = 0; j < 3; j++) {
          if (grid[i + 6][j + 3] === val) count++;
        }
      }
      else if (row < 9 && col < 9) {
        for (let j = 0; j < 3; j++) {
          if (grid[i + 6][j + 6] === val) count++;
        }
      }
    }
    return (count > 1) ? 1 : 0;
  }

  function putData(ind1, ind2, key, e) {
    let flag = 0;
    let temp = vals;
    setVals(
      vals.map((val, i) => {
        if (i !== ind1) return val;
        return val.map((v, i2) => {
          if (i2 === ind2 && i === ind1) {
            if ((key === "+" || key === "-" || e.keyCode === 190 || key === "e" || key === 0) && e.preventDefault()) {
              return v;
            } 
            else {
              if (!check(vals, ind1, ind2, key)) {
                dups.push([ind1, ind2])
                setDups(dups);
              }
              else flag = 1;
              temp[ind1][ind2] = isNaN(key) ? 0 : key; 
              return isNaN(key) ? 0 : key;
            }
          } else return v;
        });
      })
    );
    if (flag) setDups(dups.filter(row=>(verify(temp, row[0], row[1], temp[row[0]][[row[1]]]))));
  }

  let i = 0;
  return (
    <div className="grid" id="grid">
      {vals.map((val, ind1) =>
        val.map((cell, ind2) => (
          <div
            className={
              dups.some(
                (row) => JSON.stringify(row) === JSON.stringify([ind1, ind2])
              )
                ? "dup cell"
                : "cell"
            }
            key={i}
            id={i++}
            style={{
              borderTopLeftRadius: `${ind1 === 0 && ind2 === 0 ? "10px" : "0"}`,
              borderBottomLeftRadius: `${ind1 === 8 && ind2 === 0 ? "10px" : "0"
                }`,
              borderTopRightRadius: `${ind1 === 0 && ind2 === 8 ? "10px" : "0"
                }`,
              borderBottomRightRadius: `${ind1 === 8 && ind2 === 8 ? "10px" : "0"
                }`,
              borderRightWidth: `${ind2 % 3 === 2 ? "3px" : "1px"}`,
              borderBottomWidth: `${ind1 % 3 === 2 ? "3px" : "1px"}`,
            }}
          >
            <input
              type="number"
              className="cell-input"
              maxLength={1}
              onInput={(e) => putData(ind1, ind2, parseInt(e.nativeEvent.data), e)}
              value={cell ? cell : ""}
            />
          </div>
        ))
      )}
    </div>
  );
}
