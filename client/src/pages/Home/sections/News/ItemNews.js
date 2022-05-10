import { Box, Typography } from "@mui/material";
import React from "react";

const ItemNews = ({ icon: IconComponent, title, img, description }) => {
  return (
    <Box
      sx={{
        height: 400,
        maxWidth:400,
        mx:"auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          px: 2,
        }}
      >
        <IconComponent  width={"140px"} />
        <Typography variant="body2" sx={{width:'130px'}}>{title}</Typography>
      </Box>
      <img src={img} alt="windev" width={"330px"} height={"200px"} style={{objectFit:'contain'}} />
      <Typography variant="body1" sx={{p:1 ,width:'80%',textAlign:'start'}}>{description}</Typography>
    </Box>
  );
};

export default ItemNews;
