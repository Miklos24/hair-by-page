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
import React, { useState } from "react";

const pages = ["Home", "Services", "Gallery", "About", "Contact"];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      sx={{ top: 0, backgroundColor: "background.paper" }}
    >
      <Toolbar>
        <Typography
          color="text.primary"
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Hair By Page
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {pages.map((page) => (
            <Button key={page} sx={{ color: "text.primary" }}>
              {page}
            </Button>
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
                <ListItem key={page} onClick={toggleDrawer(false)}>
                  <ListItemButton>
                    <ListItemText
                      primary={page}
                      primaryTypographyProps={{ variant: "h6" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
