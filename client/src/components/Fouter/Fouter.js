import React from "react";
import { Box, Container, Divider, styled, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 4,
      }}
    >
      <Divider variant="middle" sx={{ mb: 5 }} />
      <Container maxWidth="md">
        <Box display="flex" alignItem="center">
          <LocationOnIcon />
          <Typography variant="body1" sx={{ ml: 2 }}>
            Résidence Takwa, Cité Elwafa - Route de Hammamet, Nabeul 8000
          </Typography>
        </Box>
        <Box display="flex" alignItem="center">
          <LocalPhoneIcon />
          <Typography variant="body1" sx={{ ml: 2 }}>
            (216) 31 400 421 / (216) 50 438 770
          </Typography>
        </Box>
        <Box display="flex" alignItem="center">
          <MailIcon />
          <Typography variant="body1" sx={{ ml: 2 }}>
            contact@kharrazinformatique.com
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
          <StyledIcon
            href="https://www.facebook.com/KHARRAZInformatique"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </StyledIcon>
          <StyledIcon
            href="https://www.linkedin.com/company/kharraz-informatique"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </StyledIcon>
          <Typography variant="h7">© 2022 KharrazInformatique, Inc.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

const StyledIcon = styled("a")({
  marginRight: 10,
  verticalAlign: "middle",
  "& svg": {
    fontSize: "35px",
    color: "grey",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
    transition: ".1s",
  },
});

export default Footer;
