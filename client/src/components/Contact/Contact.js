import { Box, Container, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Separator from "../../assets/images/Separator";
import EmailBox from "../../components/EmailBox";
import Fouter from "../../components/Fouter";

const Contact = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box id={"sectionContact"}>
      <Divider sx={{ my: 4 }} />
      <Typography variant={matches ? "h4" : "h3"} align="center" sx={{ fontWeight: "bold" }}>
        Contact
      </Typography>
      <Separator
        width={"230px"}
        style={{ marginBottom: "16px", display: "block", margin: "10 auto" }}
      />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.9522222708015!2d10.69001931523726!3d36.434537980025645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029f214871775f%3A0xf4c642fbdf8503f3!2sKHARRAZ%20Informatique!5e0!3m2!1sfr!2stn!4v1647442149813!5m2!1sfr!2stn"
              style={{ border: "none", width: "100%", height: "300px" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Grid>
          <Grid item md={6} xs={12}>
            <EmailBox />
          </Grid>
        </Grid>
      </Container>

      <Fouter />
    </Box>
  );
};

export default Contact;
