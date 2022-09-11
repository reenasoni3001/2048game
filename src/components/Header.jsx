import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Header = ({ score }) => {
  return (
    <Box>
      <Typography variant="h1" component="span" p={2}>
        2048
      </Typography>
      <Typography variant="h5">Join the tiles, get to 2048!</Typography>
      <Typography variant="h6" component="p">
        HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the same
        number merge into one when they touch. Add them up to reach 2048!
      </Typography>
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
          }}
        >
          New Game
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
