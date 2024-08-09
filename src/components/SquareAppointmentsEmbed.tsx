import React from "react";
import { Box } from "@mui/material";

const SquareAppointmentsEmbed: React.FC = () => {
  return (
    <Box
      sx={{
        height: "600px",
        flex: 1,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        component="iframe"
        src="https://square.site/appointments/buyer/widget/2pbz8y2goy3g2u/LWYHW9Z2GY2RP"
        sx={{
          width: "100%",
          height: "calc(100% + 64px)", // Adjust the height to account for the navbar
          border: "none",
          position: "absolute",
          top: "-64px", // Adjust the negative top value to match the navbar height
          left: 0,
        }}
        allowFullScreen
      />
    </Box>
  );
};

export default SquareAppointmentsEmbed;
