import { Card, CardContent } from "@material-ui/core";
import { getColors } from "../Util/getCellColors";

const Cell = ({ cell }) => {
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98px",
        width: "98px",
        backgroundColor: cell === 0 ? "papayawhip" : getColors(cell),
      }}
    >
      <CardContent
        style={{
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
