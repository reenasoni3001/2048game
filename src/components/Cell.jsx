import { Card, CardContent, keyframes, styled } from "@mui/material";
import { getColors } from "../Util/getCellColors";

const scaleUpCenter = keyframes`
0% {
  -webkit-transform: scale(0.5);
          transform: scale(0.5);
}
100% {
  -webkit-transform: scale(1);
          transform: scale(1);
}
`;

const Cells = styled(Card)(() => ({
  height: "98px",
  width: "98px",
  "&:hover": {
    animation: `${scaleUpCenter} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both `,
  },
}));

const Cell = ({ cell }) => {
  return (
    <Cells
      sx={{
        // height: "98px",
        // width: "98px",
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
    </Cells>
  );
};

export default Cell;
