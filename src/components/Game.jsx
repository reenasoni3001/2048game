import { Box, Grid } from "@material-ui/core";
import React from "react";
import Board from "./Board";
import Header from "./Header";

const Game = () => {
  return (
    <Box bgcolor="linear-gradient(to right, #ad5389, #3c1053)">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Grid item xs={12} sm={6} md={6}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Board />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Game;