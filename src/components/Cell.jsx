import { Card, CardContent } from "@material-ui/core";

const Cell = ({ cell }) => {
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98px",
        width: "98px",
        backgroundColor: "papayawhip",
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
