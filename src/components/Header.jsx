import { Box, Typography } from "@mui/material";
import React from "react";

const Header = ({ score }) => {
  return (
    <Box style={{ paddingLeft: 50 }}>
      <Typography variant="h1" component="span">
        2048
      </Typography>
      <Typography variant="h5">Join the tiles, get to 2048!</Typography>
      <Typography variant="h6">How to play</Typography>
      <Typography>{score}</Typography>
    </Box>
  );
};

export default Header;
