import type { Metadata } from "next";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";
import metadataContent from "@/../public/content/metadata.json";

export const metadata: Metadata = {
  title: metadataContent.title,
  description: metadataContent.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <body>
            <Navbar />
            <Box component="main" sx={{ minHeight: "80vh" }}>
              {children}
            </Box>
            <Footer />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
