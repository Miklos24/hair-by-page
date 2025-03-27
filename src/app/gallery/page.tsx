"use client";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import type { NextPage } from "next";
import galleryContent from "@/../public/content/gallery.json";

const GalleryPage: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const accessToken =
    process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN || "ABC123";
  return (
    <Container sx={{ marginTop: 8 }}>
      <Typography variant="h1" gutterBottom align="center">
        {galleryContent.title}
      </Typography>
    </Container>
  );
};

export default GalleryPage;
