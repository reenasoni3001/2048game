import { cloneDeep } from "lodash";

export const addNumber = (newGrid) => {
  let rand1 = Math.floor(Math.random() * 4);
  let rand2 = Math.floor(Math.random() * 4);

  if (newGrid[rand1][rand2] === 0) {
    newGrid[rand1][rand2] = Math.random() > 0.7 ? 4 : 2;
  } else {
    addNumber(newGrid);
  }
};

export function swipeLeftUtil(state, score, setScore) {
  let oldGrid = state;
  let newGrid = cloneDeep(state);

  for (let i = 0; i < 4; i++) {
    let b = newGrid[i];
    let slow = 0;
    let fast = 1;
    while (slow < 4) {
      if (fast === 4) {
        fast = slow + 1;
        slow++;
        continue;
      }
      if (b[slow] === 0 && b[fast] === 0) {
        fast++;
      } else if (b[slow] === 0 && b[fast] !== 0) {
        b[slow] = b[fast];
        b[fast] = 0;
        fast++;
      } else if (b[slow] !== 0 && b[fast] === 0) {
        fast++;
      } else if (b[slow] !== 0 && b[fast] !== 0) {
        if (b[slow] === b[fast]) {
          b[slow] = b[slow] + b[fast];

          console.log(score);
          setScore(score + b[slow]);
          console.log(b[slow]);
          b[fast] = 0;
          fast = slow + 1;
          slow++;
        } else {
          slow++;
          fast = slow + 1;
        }
      }
    }
  }
  if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
    addNumber(newGrid);
  }
  return newGrid;
}

export function swipeRightUtil(state, setScore, score) {
  let oldGrid = state;
  let newGrid = cloneDeep(state);

  for (let i = 3; i >= 0; i--) {
    let b = newGrid[i];
    let slow = b.length - 1;
    let fast = slow - 1;
    while (slow > 0) {
      if (fast === -1) {
        fast = slow - 1;
        slow--;
        continue;
      }
      if (b[slow] === 0 && b[fast] === 0) {
        fast--;
      } else if (b[slow] === 0 && b[fast] !== 0) {
        b[slow] = b[fast];
        b[fast] = 0;
        fast--;
      } else if (b[slow] !== 0 && b[fast] === 0) {
        fast--;
      } else if (b[slow] !== 0 && b[fast] !== 0) {
        if (b[slow] === b[fast]) {
          b[slow] = b[slow] + b[fast];
          setScore(score + b[slow]);
          b[fast] = 0;
          fast = slow - 1;
          slow--;
        } else {
          slow--;
          fast = slow - 1;
        }
      }
    }
  }
  if (JSON.stringify(newGrid) !== JSON.stringify(oldGrid)) {
    addNumber(newGrid);
  }
  return newGrid;
}

export function swipeDownUtil(state, setScore, score) {
  let oldGrid = state;
  let newGrid = cloneDeep(state);

  for (let i = 3; i >= 0; i--) {
    let slow = newGrid.length - 1;
    let fast = slow - 1;
    while (slow > 0) {
      if (fast === -1) {
        fast = slow - 1;
        slow--;
        continue;
      }
      if (newGrid[slow][i] === 0 && newGrid[fast][i] === 0) {
        fast--;
      } else if (newGrid[slow][i] === 0 && newGrid[fast][i] !== 0) {
        newGrid[slow][i] = newGrid[fast][i];
        newGrid[fast][i] = 0;
        fast--;
      } else if (newGrid[slow][i] !== 0 && newGrid[fast][i] === 0) {
        fast--;
      } else if (newGrid[slow][i] !== 0 && newGrid[fast][i] !== 0) {
        if (newGrid[slow][i] === newGrid[fast][i]) {
          newGrid[slow][i] = newGrid[slow][i] + newGrid[fast][i];
          setScore(score + newGrid[slow][i]);
          newGrid[fast][i] = 0;
          fast = slow - 1;
          slow--;
        } else {
          slow--;
          fast = slow - 1;
        }
      }
    }
  }
  if (JSON.stringify(newGrid) !== JSON.stringify(oldGrid)) {
    addNumber(newGrid);
  }
  return newGrid;
}

export function swipeUpUtil(state, setScore, score) {
  let oldGrid = JSON.parse(JSON.stringify(state));
  let newGrid = cloneDeep(state);
  for (let i = 0; i < 4; i++) {
    let slow = 0;
    let fast = 1;
    while (slow < 4) {
      if (fast === 4) {
        fast = slow + 1;
        slow++;
        continue;
      }
      if (newGrid[slow][i] === 0 && newGrid[fast][i] === 0) {
        fast++;
      } else if (newGrid[slow][i] === 0 && newGrid[fast][i] !== 0) {
        newGrid[slow][i] = newGrid[fast][i];
        newGrid[fast][i] = 0;
        fast++;
      } else if (newGrid[slow][i] !== 0 && newGrid[fast][i] === 0) {
        fast++;
      } else if (newGrid[slow][i] !== 0 && newGrid[fast][i] !== 0) {
        if (newGrid[slow][i] === newGrid[fast][i]) {
          newGrid[slow][i] = newGrid[slow][i] + newGrid[fast][i];
          setScore(score + newGrid[slow][i]);
          newGrid[fast][i] = 0;
          fast = slow + 1;
          slow++;
        } else {
          slow++;
          fast = slow + 1;
        }
      }
    }
  }
  if (JSON.stringify(oldGrid) !== JSON.stringify(newGrid)) {
    addNumber(newGrid);
  }
  return newGrid;
}
