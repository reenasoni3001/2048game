import React from "react";
import Cell from "./Cell";
import { cloneDeep } from "lodash";
import { Container, Grid } from "@mui/material";
import {
  combine,
  moveLeft,
  moveRight,
  addNumber,
  moveDown,
  rotateGrid,
  moveUp,
} from "../Util/handleSwipeFunctions";

const Board = ({ score, setScore, state, setState }) => {
  const UP_ARROW = 38;
  const DOWN_ARROW = 40;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;

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

  function checkForGameOver() {
    let checker = swipeLeft();

    if (JSON.stringify(state) !== JSON.stringify(checker)) {
      return false;
    }

    let checker2 = swipeDown();

    if (JSON.stringify(state) !== JSON.stringify(checker2)) {
      return false;
    }

    let checker3 = swipeRight();

    if (JSON.stringify(state) !== JSON.stringify(checker3)) {
      return false;
    }

    let checker4 = swipeUp();

    if (JSON.stringify(state) !== JSON.stringify(checker4)) {
      return false;
    }

    return true;
  }

  function swipeLeft() {
    const newArray = moveLeft(state);
    const result = combine(newArray, score, setScore);
    const final = moveLeft(result);
    if (JSON.stringify(state) !== JSON.stringify(final)) {
      addNumber(final);
    }

    setState(final);
    return final;
  }

  const swipeRight = () => {
    const newArray = moveRight(state);
    const result = combine(newArray, score, setScore);
    const final = moveRight(result);
    if (JSON.stringify(state) !== JSON.stringify(final)) {
      addNumber(final);
    }
    setState(final);
    return final;
  };

  const swipeDown = () => {
    const newArray = moveDown(state);
    const combined = combine(newArray, score, setScore);
    const moved = moveRight(combined);
    const final = rotateGrid(moved);
    if (JSON.stringify(state) !== JSON.stringify(final)) {
      addNumber(final);
    }
    setState(final);
    return final;
  };

  const swipeUp = () => {
    const newArray = moveUp(state);
    const combined = combine(newArray, score, setScore);
    const moved = moveLeft(combined);
    const final = rotateGrid(moved);
    if (JSON.stringify(state) !== JSON.stringify(final)) {
      addNumber(final);
    }
    setState(final);
    return final;
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
    if (state.every((row) => row.every((cell) => cell !== 0))) {
      let game = checkForGameOver();
      console.log(game);
      if (game) {
        alert("gameover");
      }
    }
  };

  return (
    <Container
    // sx={{
    //   margin: 0,
    //   height: "100%",
    // }}
    >
      {state.map((cells, i) => (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          key={i}
          sx={{
            width: "fit-content",
            backgroundColor: "#CBAC76",
          }}
        >
          {cells.map((cell, j) => (
            <Grid
              key={`${i}-${j}`}
              item
              sx={{
                margin: 0.7,
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
