import {
  Card,
  CardContent,
  keyframes,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
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

// const Cells = styled(Card)(() => ({
//   height: "98px",
//   width: "98px",
//   "&:hover": {
//     animation: `${scaleUpCenter} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both `,
//   },
// }));

const Cells = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    height: "98px",
    width: "98px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "98px",
    width: "98px",
  },
  [theme.breakpoints.down("xs")]: {
    height: "65px",
    width: "65px",
  },
}));

const CellText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontWeight: "bold",
    fontSize: 50,
  },
  [theme.breakpoints.down("sm")]: {
    fontWeight: "bold",
    fontSize: 50,
  },

  [theme.breakpoints.down("xs")]: {
    fontWeight: "bold",
    fontSize: "40px",
  },
}));

const Cell = ({ cell }) => {
  // const [showAnimation, setShowAnimation] = useState(false);

  // const prev = useRef(cell);

  // useEffect(() => {
  //   if (prev.current === 0 && cell) {
  //     setShowAnimation(true);
  //   } else {
  //     setShowAnimation(false);
  //   }

  //   prev.current = cell;
  // }, [cell]);

  return (
    <Cells
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: cell === 0 ? "#FFF7CC" : getColors(cell),
        // animation: showAnimation
        //   ? `${scaleUpCenter} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both `
        //   : null,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cell !== 0 ? <CellText>{cell}</CellText> : null}
      </CardContent>
    </Cells>
  );
};

export default Cell;
