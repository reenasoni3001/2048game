import { Card, CardContent } from "@mui/material";
import { getColors } from "../Util/getCellColors";

const Cell = ({ cell }) => {
  return (
    <Card
      sx={{
        minHeight: "98px",
        minWidth: "98px",
        bgcolor: cell === 0 ? "#FFF7CC" : getColors(cell),
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cell !== 0 ? (
          <span style={{ fontWeight: "bold", fontSize: 50 }}>{cell}</span>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default Cell;
