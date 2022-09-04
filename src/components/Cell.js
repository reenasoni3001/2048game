import { Box, Card, CardContent } from "@material-ui/core";

const Cell = ({ cell }) => {
  return (
    <Card
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "papayawhip",
      }}
    >
      <CardContent>{cell}</CardContent>
    </Card>
  );
};

export default Cell;
