import { cloneDeep } from "lodash";

//adding number to random tile which has zero element
export const addNumber = (newGrid) => {
  let rand1 = Math.floor(Math.random() * 4);
  let rand2 = Math.floor(Math.random() * 4);

  if (newGrid[rand1][rand2] === 0) {
    newGrid[rand1][rand2] = Math.random() > 0.7 ? 4 : 2;
  } else {
    addNumber(newGrid);
  }
};

//move the tiles to right
export function moveRight(state) {
  const clonedGrid = cloneDeep(state);
  let newGrid = [];
  for (let i = 0; i < clonedGrid.length; i++) {
    //filledCells
    const filledCells = clonedGrid[i].filter((row) => row !== 0);
    //emptyCells
    let emptyCells = 4 - filledCells.length;
    let addZeros = Array(emptyCells).fill(0);
    let newRow = addZeros.concat(filledCells);
    newGrid.push(newRow);
  }
  return newGrid;
}

//combine the tiles with same value
export function combine(sortedArray, score, setScore) {
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length; j++)
      if (sortedArray[i][j] === sortedArray[i][j + 1]) {
        let combinedTotal = sortedArray[i][j] + sortedArray[i][j + 1];
        sortedArray[i][j] = combinedTotal;
        setScore((prevScore) => prevScore + combinedTotal);
        sortedArray[i][j + 1] = 0;
      }
  }
  return sortedArray;
}

//move the tiles to the left
export function moveLeft(state) {
  const clonedGrid = cloneDeep(state);
  let newGrid = [];
  for (let i = 0; i < clonedGrid.length; i++) {
    const filledCells = clonedGrid[i].filter((row) => row !== 0);
    let emptyCells = 4 - filledCells.length;
    let addZeros = Array(emptyCells).fill(0);
    let newRow = filledCells.concat(addZeros);
    newGrid.push(newRow);
  }
  return newGrid;
}

//Get column from a two dimensional array
const arrayColumn = (arr, n) => arr.map((x) => x[n]);

//move the tiles up
export function moveUp(state) {
  const clonedGrid = cloneDeep(state);
  let newArray = [];
  for (let i = 0; i < clonedGrid.length; i++) {
    const column = arrayColumn(clonedGrid, i);
    const filledCells = column.filter((col) => col !== 0);
    let emptyCells = 4 - filledCells.length;
    let addZeros = Array(emptyCells).fill(0);
    let newRow = addZeros.concat(filledCells);
    newArray.push(newRow);
  }
  return newArray;
}

//function to covert column into row
//rotate matrix
// #Rotating the matrix using buffer
// for i in range(N):
//     for j in range(N):
//         rot[i][j] = arr[j][N-i-1]
export function rotateGrid(grid) {
  const newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    const row = arrayColumn(grid, i);
    newGrid.push(row);
  }
  return newGrid;
}

//swipedown
export function moveDown(state) {
  const clonedGrid = cloneDeep(state);
  let newGrid = [];
  for (let i = 0; i < clonedGrid.length; i++) {
    const column = arrayColumn(clonedGrid, i);
    const filledCells = column.filter((col) => col !== 0);
    let emptyCells = 4 - filledCells.length;
    let addZeros = Array(emptyCells).fill(0);
    let newRow = filledCells.concat(addZeros);
    newGrid.push(newRow);
  }
  return newGrid;
}
