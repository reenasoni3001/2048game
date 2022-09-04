import React from "react";
import Grid from "@material-ui/core/Grid";
import { Col, Row } from "react-grid-system";
import { Container, Paper } from "@material-ui/core";
import Cell from "./Cell";

const Board = () => {
  const [state, setState] = React.useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  return (
    <Container
      style={{
        height: "350px",
        width: "480px",
      }}
    >
      <Grid container spacing={1}>
        {state.map((cells) =>
          cells.map((cell, i) => (
            <Grid
              item
              xs={3}
              md={3}
              style={{
                backgroundColor: "lightgoldenrodyellow",
              }}
            >
              <Cell cell={cell} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Board;
