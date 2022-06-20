export function check(grid, row, col, val) {
  if (val === 0 || val === grid[row][col]) return true;
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === val) return false;
    if (grid[i][col] === val) return false;
  }
  for (let i = 0; i < 3; i++) {
    if (row < 3 && col < 3) {
      if (grid[i][0] === val || grid[i][1] === val || grid[i][2] === val)
        return false;
    } else if (row < 6 && col < 3) {
      if (
        grid[i + 3][0] === val ||
        grid[i + 3][1] === val ||
        grid[i + 3][2] === val
      )
        return false;
    } else if (row < 9 && col < 3) {
      if (
        grid[i + 6][0] === val ||
        grid[i + 6][1] === val ||
        grid[i + 6][2] === val
      )
        return false;
    } else if (row < 3 && col < 6) {
      if (grid[i][3] === val || grid[i][4] === val || grid[i][5] === val)
        return false;
    } else if (row < 3 && col < 9) {
      if (grid[i][6] === val || grid[i][7] === val || grid[i][8] === val)
        return false;
    } else if (row < 6 && col < 6) {
      if (
        grid[i + 3][3] === val ||
        grid[i + 3][4] === val ||
        grid[i + 3][5] === val
      )
        return false;
    } else if (row < 6 && col < 9) {
      if (
        grid[i + 3][6] === val ||
        grid[i + 3][7] === val ||
        grid[i + 3][8] === val
      )
        return false;
    } else if (row < 9 && col < 6) {
      if (
        grid[i + 6][3] === val ||
        grid[i + 6][4] === val ||
        grid[i + 6][5] === val
      )
        return false;
    } else if (row < 9 && col < 9) {
      if (
        grid[i + 6][6] === val ||
        grid[i + 6][7] === val ||
        grid[i + 6][8] === val
      )
        return false;
    }
  }

  return true;
}


export function solveGrid(grid, row, col) {
  var cont = 1;
  const solve= function(grid, row, col){
    if (row > 8 && col > 8) return grid;
    else if (row > 8) {
      row = 0;
      col++;
    }

    if (grid[row][col] !== 0) {
      if (check(grid, row, col, grid[row][col]))
        return solve(grid, row + 1, col);
      else {
        console.log("invalid values");
        cont = 0;
        return false;
      }
    }

    for (let i = 1; i <= 9; i++) {
      if (cont === 0) return false;
      if (check(grid, row, col, i)) {
        grid[row][col] = i;
        if (solve(grid, row + 1, col)) return grid;
        else grid[row][col] = 0;
      }
    }
    return false;
  }
  return solve(grid, row, col)
}
