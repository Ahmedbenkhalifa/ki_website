import {  Container, Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Separator from "../../assets/images/Separator";

const Inclusive = ({list,subsubtitle,description}) => {
  const theme=useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography align="center"  variant={matches? "h4" :"h3"} sx={{fontWeight: "500" }}>
        Tout inclus
      </Typography>
      <Separator
        width={"230px"}
        style={{ marginBottom:'16px', display: "block", margin: "10 auto" }}
      />
      <Grid container spacing={4}>
        {list.map((elem, key) => (
          <Grid key={key} item md={3} sm={4} xs={6}>
            <Item icon={elem.icon} content={elem.description} />
          </Grid>
        ))}
      </Grid>
      <Typography align="center"  variant={matches? "h5" :"h4"} sx={{ mt:8, mb:4, fontWeight: "500" }}>
        {subsubtitle}
      </Typography>
      <Typography variant="body2">
      {description}
      </Typography>
    </Container>
  );
};

const Item = ({ icon, content }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        maxWidth: "280px",
        height: "130px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:'#f4f4f4'
      }}
    >
      <img alt={content} src={icon} width={'90px'} height={"75px"}  style={{objectFit:'contain'}}/>
      <Typography align="center">
        {content}
      </Typography>
    </Paper>
  );
};
export default Inclusive;
