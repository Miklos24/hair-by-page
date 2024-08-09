"use client";

import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Parallax } from "react-parallax";
import homepageContent from "@/../public/content/home.json";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ textAlign: "center", padding: 0 }}>
      <Parallax
        bgImage="/images/hair_01.jpeg"
        strength={400}
        bgImageStyle={{
          maxWidth: "100%",
          height: "auto",
        }}
      >
        <Box
          sx={{
            height: isMobile ? "30vh" : "30vh",
            marginTop: isMobile ? "15vh" : "30vh",
            paddingX: isMobile ? 10 : 0,
          }}
        >
          <Typography
            variant="h3"
            color="background.default"
            sx={{ marginTop: 4 }}
          >
            {homepageContent.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="background.default"
            sx={{ marginTop: 2 }}
          >
            {homepageContent.subtitle}
          </Typography>
        </Box>
      </Parallax>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          textAlign: isMobile ? "center" : "left",
          backgroundColor: "background.paper",
        }}
      >
        <Box
          component="img"
          src="/images/page_image.jpg"
          alt="Page"
          sx={{
            width: isMobile ? "80%" : "40%",
            height: "auto",
            marginBottom: isMobile ? 2 : 0,
            marginRight: isMobile ? 0 : 4,
          }}
        />
        <Box sx={{ maxWidth: "600px" }}>
          <Typography variant="h5" color="text.primary" gutterBottom>
            {homepageContent.about.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {homepageContent.about.content}
          </Typography>
          <Box sx={{ marginTop: 4, marginBottom: 4 }}>
            <Button
              variant="contained"
              color="primary"
              href="/bookings"
              sx={{ padding: "10px 20px", fontSize: "16px" }}
            >
              {homepageContent.about.cta}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
