import { Grid } from "@mui/material";
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
  //const score = useRef(0);

  return (
    <Grid
      container
      justifyContent="center"
      direction="row"
      sx={{
        // background:
        //   "linear-gradient(to bottom, #f0ce92, #f4b38f, #eb9b97, #d38aa3, #af7fab)",
        minHeight: { xs: 12, md: 12, sm: 12, lg: 12, xl: 12 },
        minWidth: { xs: 12, md: 12, sm: 12 },
      }}
    >
      <Grid item xs={12} sm={12} md={6} padding={3}>
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
  );
};

export default Game;
