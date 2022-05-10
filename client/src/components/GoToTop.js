import { Fab } from "@mui/material";
import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const GoToTop = () => {
  const [scrolled, setIsScrolled] = useState(false);
  const handleScroll = () => setIsScrolled(window.scrollY > 0);
  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };
  return (
    <Fab
      size="small"
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 333,
        opacity: scrolled ? 1 : 0,
        visibility: scrolled? 'visible': 'hidden',
        cursor: "pointer",
        transition: ".1s",
        transform:scrolled ? 'translateY(-5px)':'translateY(0)'
      }}
    >
      <ExpandLessIcon  />
    </Fab>
  );
};

export default GoToTop;
