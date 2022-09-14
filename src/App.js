import { Grid } from "@mui/material";
import Game from "./components/Game";

function App() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        //height: "100vh",
        //minWidth: "100vh",
        minHeight: { xs: 12, md: 12, sm: 12, lg: 12, xl: 12 },
        minWidth: { xs: 12, md: 12, sm: 12 },
      }}
    >
      <Grid item xs={12} md={12} sm={12}>
        <Game />
      </Grid>
    </Grid>
  );
}

export default App;
