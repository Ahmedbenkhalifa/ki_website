import React, { useState } from "react";
import Slider from "react-slick";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./style.css";
import { Box, IconButton } from "@mui/material";

const Carousel = ({ children,sx, ...rest }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    arrows: true,
    lazyload: true,
    infinite: true,
    speed: 300,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    pauseOnHover: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setSlideIndex(next),
    // responsive: [    
    //   {
    //     breakpoint: 780,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       fade: true,
    //     },
    //   },
    // ],
    ...rest
  };
  return (
    <Box sx={sx}>
      <Slider {...settings}>
        {children.map((child, k) => (
          <span
            key={k}
            className="slide"
          >
              {child}
          </span>
        ))}
      </Slider>
    </Box>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <IconButton>
        <ArrowForwardIcon fontSize="large" sx={{  color: 'rgb(230,230,230)'}} />
      </IconButton>
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <IconButton>
        <ArrowBackIcon fontSize="large" sx={{  color: 'rgb(230,230,230)'}} />
      </IconButton>
    </div>
  );
};

export default Carousel;
