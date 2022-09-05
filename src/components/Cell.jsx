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
        {cell}
      </CardContent>
    </Card>
  );
};

export default Cell;
