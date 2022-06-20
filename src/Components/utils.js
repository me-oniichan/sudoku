export function check(grid, row, col, val) {
    if (val === "") return true;
    for (let i = 0; i < 9; i++) {
        if (grid[row][i] === val) return false;
        if (grid[i][col] === val) return false;
    }
    for (let i = 0; i < 3; i++) {
        if (row < 3 && col < 3) {
            if (grid[i][0] === val || grid[i][1] === val || grid[i][2] === val) return false;
        }
        else if (row < 6 && col < 3) {
            if (grid[i + 3][0] === val || grid[i + 3][1] === val || grid[i + 3][2] === val) return false;
        }
        else if (row < 9 && col < 3) {
            if (grid[i + 6][0] === val || grid[i + 6][1] === val || grid[i + 6][2] === val) return false;
        }
        else if (row < 3 && col < 6) {
            if (grid[i][3] === val || grid[i][4] === val || grid[i][5] === val) return false;
        }
        else if (row < 3 && col < 9) {
            if (grid[i][6] === val || grid[i][7] === val || grid[i][8] === val) return false;
        }
        else if (row < 6 && col < 6) {
            if (grid[i + 3][3] === val || grid[i + 3][4] === val || grid[i + 3][5] === val) return false;
        }
        else if (row < 6 && col < 9) {
            if (grid[i + 3][6] === val || grid[i + 3][7] === val || grid[i + 3][8] === val) return false;
        }
        else if (row < 9 && col < 6) {
            if (grid[i + 6][3] === val || grid[i + 6][4] === val || grid[i + 6][5] === val) return false;
        }
        else if (row < 9 && col < 9) {
            if (grid[i + 6][6] === val || grid[i + 6][7] === val || grid[i + 6][8] === val) return false;
        }
    }

    return true;
}