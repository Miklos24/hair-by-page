"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface ContentToggleProps {
  labels: {
    heading: string;
    options: string[];
  };
  children: [ReactNode, ReactNode, ...ReactNode[]];
}

const ContentToggle: React.FC<ContentToggleProps> = ({ labels, children }) => {
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
      <Typography variant="h2" gutterBottom align="center">
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
                sx={{ width: "190px" }}
              >
                {option}
              </Button>
            </Grid>
            {index < labels.options.length - 1 && (
              <Grid item>
                <Box
                  sx={{
                    width: "2px",
                    height: "60px",
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
