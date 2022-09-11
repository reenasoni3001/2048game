import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Cell from "./Cell";
import { cloneDeep } from "lodash";

const Board = () => {
  const UP_ARROW = 38;
  const DOWN_ARROW = 40;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;
  const [state, setState] = React.useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const [score, setScore] = React.useState(0);

  const initialize = () => {
    const newGrid = cloneDeep(state);
    addNumber(newGrid);
    addNumber(newGrid);
    setState(newGrid);
  };

  React.useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const addNumber = (newGrid) => {
    let rand1 = Math.floor(Math.random() * 4);
    let rand2 = Math.floor(Math.random() * 4);

    if (newGrid[rand1][rand2] === 0) {
      newGrid[rand1][rand2] = Math.random() > 0.7 ? 4 : 2;
    } else {
      addNumber(newGrid);
    }
  };

  function swipeLeft() {
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
    setState(newGrid);
  }

  const swipeRight = () => {
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
    // if (dummy) {
    //   return newGrid;
    // } else {
    //   setState(newGrid);
    // }
    setState(newGrid);
  };

  const swipeDown = () => {
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
    // if (dummy) {
    //   return newGrid;
    // } else {
    //   setData(newGrid);
    // }
    setState(newGrid);
  };

  const swipeUp = () => {
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
    // if (dummy) {
    //   return newGrid;
    // } else {
    //   setData(newGrid);
    // }
    setState(newGrid);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyEvents);

    return () => {
      window.removeEventListener("keydown", handleKeyEvents);
    };
  });

  const handleKeyEvents = (event) => {
    event.preventDefault();
    switch (event.keyCode) {
      case LEFT_ARROW:
        swipeLeft();
        break;
      case RIGHT_ARROW:
        swipeRight();
        break;
      case DOWN_ARROW:
        swipeDown();
        break;
      case UP_ARROW:
        swipeUp();
        break;

      default:
        break;
    }
  };

  return (
    <Container
      style={{
        width: "490px",
        padding: "20px",
      }}
    >
      {state.map((cells, i) => (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          key={i}
          style={{ backgroundColor: "#bbada0" }}
        >
          {cells.map((cell, j) => (
            <Grid
              key={`${i}-${j}`}
              item
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#bbada0",
                margin: 6,
              }}
            >
              <Cell cell={cell} />
            </Grid>
          ))}
        </Grid>
      ))}
      {score}
    </Container>
  );
};

export default Board;
