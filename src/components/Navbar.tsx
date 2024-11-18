"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import Link from "next/link";
import navContent from "@/../public/content/nav.json";

const pages: string[] = ["Home", "Services", "Policies", "Bookings"];

const pageToPath = (page: string) => {
  if (page === "Home") return "/";
  return `/${page.toLowerCase()}`;
};

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        backgroundColor: "transparent",
        "&:after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.background.paper} 0%, ${theme.palette.background.paper} 20%, transparent 100%)`,
          zIndex: -1,
        },
      }}
    >
      <Toolbar sx={{ minHeight: "64px" }}>
        <Typography
          color="text.primary"
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, fontFamily: '"Libra Baskerville", serif' }}
        >
          {navContent.title.toLowerCase()}
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {pages.map((page) => (
            <Link key={page} href={pageToPath(page)} passHref>
              <Button sx={{ color: "text.primary" }}>{page}</Button>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(true)}
            color="default"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              width: 250,
              "& .MuiDrawer-paper": {
                width: 250,
                boxSizing: "border-box",
              },
            }}
          >
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ alignSelf: "flex-start", m: 2 }}
            >
              <CloseIcon />
            </IconButton>
            <List>
              {pages.map((page) => (
                <Link key={page} href={pageToPath(page)} passHref>
                  <ListItem component="a" onClick={toggleDrawer(false)}>
                    <ListItemButton>
                      <ListItemText
                        primary={page}
                        primaryTypographyProps={{ variant: "h6" }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
