import { cloneDeep } from "lodash";

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
