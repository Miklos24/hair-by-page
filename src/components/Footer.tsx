import { Box, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import contactContent from "@/../public/content/contact.json";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{ padding: 2, textAlign: "center", borderTop: "1px solid #e0e0e0" }}
    >
      <Typography variant="body2" color="text.secondary">
        <a
          href={contactContent.urls.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {contactContent.address}
        </a>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {contactContent.phone}
      </Typography>
      <Box sx={{ marginTop: 1 }}>
        <IconButton
          href={contactContent.urls.instagram}
          target="_blank"
          color="inherit"
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
