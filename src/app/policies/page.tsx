"use client";
import { Box, Grid, Typography } from "@mui/material";
import { Parallax } from "react-parallax";
import policiesContent from "@/../public/content/policies.json";
import type { NextPage } from "next";

const PoliciesPage: NextPage = () => {
  return (
    <Box>
      <Box sx={{ textAlign: "center", marginTop: 8, marginBottom: 4 }}>
        <Typography variant="h1" gutterBottom align="center">
          Policies
        </Typography>
      </Box>
      <Box sx={{ margin: 2 }}>
        <Typography variant="h4" sx={{ marginBottom: 1 }}>
          {policiesContent.policies.deposit.title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          {policiesContent.policies.deposit.description}
        </Typography>
        <Typography variant="h4" sx={{ marginBottom: 1 }}>
          {policiesContent.policies.late_cancellations.title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          {policiesContent.policies.late_cancellations.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default PoliciesPage;
