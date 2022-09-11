import { Box, Typography } from "@material-ui/core";

import React from "react";

const Header = () => {
  return (
    <Box style={{ paddingLeft: "50px" }}>
      <Typography variant="h1" component="span">
        2048
      </Typography>
      <Typography variant="h5">Join the tiles, get to 2048!</Typography>
      <Typography variant="h6">How to play</Typography>
    </Box>
  );
};

export default Header;
