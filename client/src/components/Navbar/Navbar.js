import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box, useTheme } from "@mui/material";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";
import { hexToRgba } from "../../utils/colors";
import logo from "../../assets/images/logoLarge.png";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll/modules";

const smoothScrollProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};
const Navbar = () => {
  const [scrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const handleNav = () => setIsScrolled(window.scrollY > 0);
  window.addEventListener("scroll", handleNav);
  const navigateTo = useNavigate();
  const navigate = () => {
    navigateTo("/");
    scroller.scrollTo('sectionAccueil', { ...smoothScrollProps });
  };

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 8 : 0}
      sx={{
        background: hexToRgba(theme.palette.background.default, 0.9),
        transition: ".2s",
        backdropFilter: scrolled ? "blur(5px)" : "inherit",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 0,
          }}
        >
          <img
            src={logo}
            alt="logo kharraz informatique"
            width={"120px"}
            height={"50px"}
            style={{ cursor: "pointer" }}
            onClick={navigate}
          />
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Menu />
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <HamburgerMenu color="black" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
