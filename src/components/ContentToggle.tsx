"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { ReactNode } from "react";

interface ContentToggleProps {
  labels: {
    heading: string;
    options: string[];
  };
  children: [ReactNode, ReactNode, ...ReactNode[]];
}

const ContentToggle: React.FC<ContentToggleProps> = ({ labels, children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (children.length !== labels.options.length) {
    throw new Error(
      "The number of children must match the number of options in the labels."
    );
  }

  const [selected, setSelected] = React.useState<number | null>(null);

  const handleSelect = (index: number) => () => {
    setSelected(index);
  };

  return (
    <>
      <Typography variant="h2" align="center" gutterBottom>
        {labels.heading}
      </Typography>
      <Grid container justifyContent="center">
        {labels.options.map((option, index) => (
          <React.Fragment key={option}>
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <Button
                variant={index === selected ? "contained" : "outlined"}
                size="large"
                onClick={handleSelect(index)}
                sx={{ width: isMobile ? "130px" : "190px" }}
              >
                {option}
              </Button>
            </Grid>
            {index < labels.options.length - 1 && (
              <Grid item>
                <Box
                  sx={{
                    width: "2px",
                    height: isMobile ? "100px" : "60px",
                    backgroundColor: "rgba(0, 0, 0, 0.54)",
                    mx: "5vw",
                  }}
                ></Box>
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
      <Container sx={{ marginTop: 4 }} />
      {children.map((child, index) => (
        <Box
          key={index}
          sx={{ display: index === selected ? "block" : "none" }}
        >
          {child}
        </Box>
      ))}
    </>
  );
};

export default ContentToggle;
