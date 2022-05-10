import {  Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { contentNews } from "../../../../constants/contentNews";
import ItemNews from "./ItemNews";

const News = () => {
  return (
    <Container maxWidth="lg" sx={{ overflow: "hidden" }}>
      <Typography variant="h6" align="center">
        Plateforme DevOps intégrée
      </Typography>
      <Typography variant="h4" align="center">
        DÉVELOPPEZ 10 FOIS PLUS VITE
      </Typography>
      <Grid container sx={{ pt: 4 }} spacing={4}>
        {contentNews.map((elem, k) => (
          <Grid key={k} item md={4} xs={12}>
            <ItemNews
              icon={elem.icon}
              title={elem.title}
              img={elem.img}
              description={elem.description}
            />
            {k !== contentNews.length - 1 && (
              <Divider sx={{ display: { md: "none", xs: "block" } }} variant="middle" />
            )}
          </Grid>
        ))}
      </Grid>
      <Button
        href="https://pcsoft.fr/pcsoft/tdfcom/2021/windev-tour-27-replay.htm"
        target="_blank"
        variant="contained"
        sx={{ margin: "0 auto", width: "200px", border: "1px solid", display: "block" }}
      >
        Voir les nouveautés
      </Button>
    </Container>
  );
};

export default News;
