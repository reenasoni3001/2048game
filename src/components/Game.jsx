import { Container, Grid } from "@mui/material";
import React from "react";
import Board from "./Board";
import Header from "./Header";

const Game = () => {
  const [state, setState] = React.useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const [score, setScore] = React.useState(0);

  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        p: 3.5,
        background:
          "linear-gradient(to bottom, #f0ce92, #f4b38f, #eb9b97, #d38aa3, #af7fab)",
      }}
    >
      <Grid container justifyContent="center" direction="row">
        <Grid item xs={12} sm={12} md={6} paddingBottom={3}>
          <Header score={score} state={state} setState={setState} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Board
            score={score}
            setScore={setScore}
            state={state}
            setState={setState}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Game;
