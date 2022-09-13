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
    const filteredRow = clonedGrid[i].filter((row) => row !== 0);
    let missingElements = 4 - filteredRow.length;
    let addZeros = Array(missingElements).fill(0);
    let newRow = addZeros.concat(filteredRow);
    newGrid.push(newRow);
  }
  return newGrid;
}

//combine the tiles with same value
export function combine(sortedArray) {
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length; j++)
      if (sortedArray[i][j] === sortedArray[i][j + 1]) {
        let combinedTotal = sortedArray[i][j] + sortedArray[i][j + 1];
        sortedArray[i][j] = combinedTotal;
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
    const filteredRow = clonedGrid[i].filter((row) => row !== 0);
    let missingElements = 4 - filteredRow.length;
    let addZeros = Array(missingElements).fill(0);
    let newRow = filteredRow.concat(addZeros);
    newGrid.push(newRow);
  }
  return newGrid;
}

//Get column from a two dimensional array
const arrayColumn = (arr, n) => arr.map((x) => x[n]);

export function moveUp(state) {
  const clonedGrid = cloneDeep(state);
  let newArray = [];
  for (let i = 0; i < clonedGrid.length; i++) {
    const column = arrayColumn(clonedGrid, i);
    const filteredColumn = column.filter((col) => col !== 0);
    let missing = 4 - filteredColumn.length;
    let zeros = Array(missing).fill(0);
    let newRow = zeros.concat(filteredColumn);
    newArray.push(newRow);
  }
  return newArray;
}

//function to covert column into row

export function convertToRow(colMal) {
  const newArr = [];
  for (let i = 0; i < colMal.length; i++) {
    const res = arrayColumn(colMal, i);
    newArr.push(res);
  }
  return newArr;
}
