import { Grid } from "@mui/material";
import React from "react";
import Board from "./Board";
import Header from "./Header";

const Game = () => {
  const [score, setScore] = React.useState(0);
  return (
    <Grid container justifyContent="center" direction="row">
      <Grid item xs={12} sm={12} md={6} padding={3}>
        <Header score={score} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Board score={score} setScore={setScore} />
      </Grid>
    </Grid>
  );
};

export default Game;
