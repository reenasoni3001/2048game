import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/200w.webp";
import { addNumber } from "../Util/handleSwipeFunctions";

const Title = styled(Typography)(() => ({
  color: "#eee",
}));

const Header = ({ score, state, setState, setScore }) => {
  function resetGame() {
    const emptyGrid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    addNumber(emptyGrid);
    addNumber(emptyGrid);
    setState(emptyGrid);
    setScore(0);
  }

  return (
    <Box xs={12} md={12}>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <Title className="heading" variant="h1" component="span" p={2}>
          2048
        </Title>
        <Box component="img" sx={{ height: 90 }} alt="2048!" src={logo} />
      </Box>
      <Box display="flex" justifyContent="flex-start" flexDirection="column">
        <Typography variant="h5">Join the tiles, get to 2048!</Typography>
        <Typography variant="h6" component="p">
          HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the
          same number merge into one when they touch. Add them up to reach 2048!
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        p={1}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{
            boxShadow: 1,
            borderRadius: 2,
            minWidth: 120,
            minHeight: 20,
            background: "#F6CD9B",
          }}
        >
          <Typography>SCORE</Typography>
          <Typography sx={{ p: 1 }}>{score}</Typography>
        </Box>
        <Button
          p={2}
          sx={{
            boxShadow: 1,
            borderRadius: 2,
            minWidth: 100,
            minHeight: 30,
            background: "#F6CD9B",
          }}
          onClick={resetGame}
        >
          New Game
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
