import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Container } from "@material-ui/core";
import Cell from "./Cell";
import { cloneDeep } from "lodash";

const Board = () => {
  const LEFT_ARROW = 37;
  const [state, setState] = React.useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

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
      newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
    }
  };

  function swipeLeft() {
    let oldGrid = state;
    let newArray = cloneDeep(state);

    for (let i = 0; i < 4; i++) {
      let b = newArray[i];
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
    if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
      addNumber(newArray);
    }
    setState(newArray);
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyEvents);
  });

  const handleKeyEvents = (event) => {
    switch (event.keyCode) {
      case LEFT_ARROW:
        swipeLeft();
        break;

      default:
        break;
    }
  };

  return (
    <Container
      style={{
        width: "490px",
      }}
    >
      {state.map((cells, i) => (
        <Grid
          container
          direction="row"
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
    </Container>
  );
};

export default Board;
