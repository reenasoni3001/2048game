import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import img from "../assets/2048Logo.gif";

const Header = () => {
  return (
    <Box>
      <Grid container direction="row" justifyContent="center" spacing={6}>
        <Grid item>
          <Box
            component="img"
            style={{
              height: "150px",
              width: "180px",

              // maxHeight: { xs: 20, md: 40 },
              // maxWidth: { xs: 25, md: 50 },
            }}
            alt="2048"
            src={img}
          />
        </Grid>
        <Grid item>
          <Grid container direction="column" justifyContent="center">
            <Grid item>
              <Card
                style={{
                  height: "90px",
                  width: "110px",
                }}
              >
                <CardContent>
                  <Typography>Score</Typography>
                  <Typography>0</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
