import React from "react";

import Cell from "./Cell";
import { cloneDeep } from "lodash";
import {
  swipeDownUtil,
  swipeLeftUtil,
  swipeRightUtil,
  swipeUpUtil,
} from "../Util/handleKeyfunctions";
import { Container, Grid } from "@mui/material";
import {
  combine,
  moveLeft,
  moveRight,
  addNumber,
  moveDown,
  convertToRow,
  moveUp,
} from "../Util/handleSwipeFunctions";

const Board = ({ score, setScore }) => {
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

  function swipeLeft() {
    // const newGrid = swipeLeftUtil(state, score, setScore);
    // setState(newGrid);
    const newArray = moveLeft(state);
    const result = combine(newArray);
    const final = moveLeft(result);
    if (JSON.stringify(state) !== JSON.stringify(final)) {
      addNumber(final);
    }
    setState(final);
  }

  const swipeRight = () => {
    // let newGrid = swipeRightUtil(state, setScore, score);
    // setState(newGrid);
    const newArray = moveRight(state);
    const result = combine(newArray);
    const final = moveRight(result);
    if (JSON.stringify(state) !== JSON.stringify(final)) {
      addNumber(final);
    }
    setState(final);
  };

  // const swipeDown = () => {
  //   let newGrid = swipeDownUtil(state, setScore, score);

  //   setState(newGrid);

  // };

  const swipeUp = () => {
    //   let newGrid = swipeUpUtil(state, setScore, score);

    //   setState(newGrid);
    const newArray = moveUp(state);
    const combined = combine(newArray);
    const moved = moveLeft(combined);
    const final = convertToRow(moved);
    if (JSON.stringify(state) !== JSON.stringify(final)) {
      addNumber(final);
    }
    setState(final);
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
      // case DOWN_ARROW:
      //   swipeDown();
      //   break;
      case UP_ARROW:
        swipeUp();
        break;

      default:
        break;
    }

    if (state.every((row) => row.every((cell) => cell !== 0))) {
      alert("game over");
    }
  };

  return (
    <Container
      sx={{
        width: 490,
        p: 2,
      }}
    >
      {state.map((cells, i) => (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          key={i}
          sx={{
            backgroundColor: "#F5F9D3",
          }}
        >
          {cells.map((cell, j) => (
            <Grid
              key={`${i}-${j}`}
              item
              style={{
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
