import { useContext} from "react";
import DupContext from "../Context/DupContext";
import GridContext from "../Context/GridContext";
import { check } from "./utils";

export default function Grid() {
  const [vals, setVals] = useContext(GridContext);
  const [dups, setDups] = useContext(DupContext);


  function putData(ind1, ind2, key, e) {
    e.preventDefault();
    setVals(
      vals.map((val, i) => {
        if (i !== ind1) return val;
        return val.map((v, i2) => {
          if (i2 === ind2 && i === ind1) {
            if (key === "+" || key === "-" || key === "." || key === "e" || key === 0) {
              return v;
            } else {
              if (!check(vals, ind1, ind2, key))
                setDups([...dups, [ind1, ind2]]);
              else setDups(dups.filter(row => (JSON.stringify(row) !== JSON.stringify([ind1, ind2]))))
              return isNaN(key) ? 0 : key;
            }
          } else return v;
        });
      })
    );
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
              value={cell? cell: ""}
            />
          </div>
        ))
      )}
    </div>
  );
}
