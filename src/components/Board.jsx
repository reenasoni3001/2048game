import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Cell from "./Cell";
import { cloneDeep } from "lodash";

const Board = () => {
  const [state, setState] = React.useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const initialize = () => {
    const newGrid = cloneDeep(state);
    addInitialNumbers(newGrid);
    addInitialNumbers(newGrid);
    setState(newGrid);
  };

  React.useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const addInitialNumbers = (newGrid) => {
    let rand1 = Math.floor(Math.random() * 4);
    let rand2 = Math.floor(Math.random() * 4);

    if (newGrid[rand1][rand2] === 0) {
      newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
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
