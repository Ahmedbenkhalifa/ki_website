import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import testimoniesImg from "../../../../assets/images/100-temoignages-windev.png";
import experienceImg from "../../../../assets/images/100-retours-d-experience.png";
import videoMENICON from "../../../../assets/videos/menicon.mp4";
import Clients from "./Clients";

const Testimonies = () => {
  return (
    <>
      <Box sx={{ my: 4, py: 4, backgroundColor: "#EEEEEE" }} id={"sectionTémoignages"}>
        <Container maxWidth="lg">
          <img
            alt="Témoignages"
            src={testimoniesImg}
            style={{ maxWidth: "300px", display: "block", margin: "0 auto" }}
          />
          <img
            alt="100 Retours d'Expérience"
            src={experienceImg}
            style={{ maxWidth: "300px", display: "block", margin: "0 auto" }}
          />
          <Grid container sx={{ pt: 4 }} spacing={3}>
            <Grid item md={6} xs={12}>
              <Box>
                <Item
                  title={"MENICON, leader mondial des lentilles de contact"}
                  description={
                    "MENICON, leader mondial des lentilles de contact présente son ERP réalisé en WINDEV [CRM, Cognex]"
                  }
                  video={videoMENICON}
                  url={
                    "https://www.youtube.com/embed/DUYnRAdihrE?rel=0&autoplay=1"
                  }
                  link={"Accédez au témoignage vidéo MENICON"}
                />
              </Box>
              <Divider
                variant="middle"
                sx={{ display: { md: "none", xs: "block" }, my: 2 }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Item
                title={
                  "Numéro spécial 01net, 100 Témoignages sur WINDEV, WEBDEV et WINDEV Mobile"
                }
                description={"Profitez de l'expérience de vos pairs"}
                img={
                  "https://pcsoft.fr/img/2014/windev-et-webdev-dans-les-grandes-entreprises.png"
                }
                url={"https://pcsoft.fr/pcsoft/temoignages.html"}
                link={"Consultez la revue"}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Clients />
    </>
  );
};

const Item = ({ title, description, img, video, link, url }) => {
  return (
    <Box
      sx={{
        maxWidth: 450,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontWeight: "700", mb: 1 }}>{title}</Typography>
      <Typography sx={{ mb: 2 }}>{description}</Typography>
      {img && (
        <a href={url} target="_blank" rel="noreferrer">
          <img src={img} alt="testimonies magazine" />
        </a>
      )}
      {video && (
        <a href={url} target="_blank" rel="noreferrer">
          <video
            style={{ maxWidth: "100%" }}
            preload="auto"
            muted
            autoPlay
            loop
            alt="MENICON, leader mondial des lentilles de contact"
            border="0"
            title="MENICON, leader mondial des lentilles de contact"
          >
            <source src={video} type="video/mp4" />
          </video>
        </a>
      )}
      <Typography
        component="a"
        href={url}
        target="_blank"
        rel="noreferrer"
        color="secondary"
        sx={{ textDecoration: "underline" }}
      >
        {link}
      </Typography>
    </Box>
  );
};
export default Testimonies;
