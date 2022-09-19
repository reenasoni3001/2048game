import { Box, Button, keyframes, styled, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/200w.webp";
import { addNumber } from "../Util/handleSwipeFunctions";

const textPopUpTop = keyframes`
0% {
  -webkit-transform: translateY(0);
          transform: translateY(0);
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  text-shadow: none;
}
100% {
  -webkit-transform: translateY(-50px);
          transform: translateY(-50px);
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
}

`;

const Title = styled(Typography)(() => ({
  color: "#fff",
  fontWeight: "bold",
  "&:hover": {
    animation: `${textPopUpTop} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both `,
  },
}));

const Description = styled(Typography)(() => ({
  color: "#fff",
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
        <Description variant="h5">Join the tiles, get to 2048!</Description>
        <Description variant="h6" component="p">
          HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the
          same number merge into one when they touch. Add them up to reach 2048!
        </Description>
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
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#281e1e",
              fontSize: "20px",
            }}
          >
            SCORE
          </Typography>
          <Typography
            sx={{
              p: 1,
              fontWeight: "bold",
              color: "#824646",
              fontSize: "20px",
            }}
          >
            {score}
          </Typography>
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
