import { Grid } from "@mui/material";
import Game from "./components/Game";

function App() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        background: "linear-gradient(to right, #ad5389, #3c1053)",
        height: "100vh",
        minWidth: "100vh",
      }}
    >
      <Grid item xs={12} md={12} sm={12}>
        <Game />
      </Grid>
    </Grid>
  );
}

export default App;
