import React from "react";
import { Grid, Paper, Typography, Container, Button, ButtonGroup, useTheme, useMediaQuery } from "@mui/material";
import packImg from "../../../../assets/images/packages-windev-webdev-windev-mobile.png";
import lstImg from "../../../../assets/images/lst127.png";
import { Link } from "react-router-dom";

const Product = () => {
  const theme=useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container maxWidth="lg" sx={{ p: 4, mb: 8 }} id={"sectionProduits"}>
      <Typography
        align="center"
        variant={matches? "h4" :"h3"}
        color="secondary"
        sx={{ fontWeight: "bold", textTransform: "uppercase" }}
      >
        Découvrez nos produits
      </Typography>
      <Grid container sx={{ pt: 5 }} spacing={2}>
        <Grid item md={6} xs={12}>
          <ItemProduct img={packImg} subtitle={"Outils de Développement"}>
           
              <ButtonGroup
                variant="outlined"
                color="secondary"                
                sx={{display: "flex", m: "15px auto",justifyContent:'center',textAlign:'center'}}
              >
                <Button  component={Link}  to="/product/windev" variant="outlined" color="secondary" sx={{ borderRadius: "30px" }}>
                  Windev
                </Button>
                <Button  component={Link} to="/product/webdev" variant="outlined" color="secondary" >
                  WebDev
                </Button>
                <Button  component={Link} to="/product/windevMobile" variant="outlined" color="secondary" sx={{ borderRadius: "30px" }}>
                  Windev Mobile
                </Button>
              </ButtonGroup>
          
          </ItemProduct>
        </Grid>

        <Grid item md={6} xs={12}>
          <ItemProduct img={lstImg} subtitle={"Informations Complémentaire"}>
            <Link to="/product/lst">
              <Button
                variant="outlined"
                color="secondary"
                sx={{ display: "block", m: "15px auto 0", borderRadius: "30px" }}
              >
                Voir Plus
              </Button>
            </Link>
          </ItemProduct>
        </Grid>
      </Grid>
    </Container>
  );
};

const ItemProduct = ({ img, subtitle, children }) => {
  return (
    <Paper
      elevation={6}
      sx={{ p: 2, minHeight: 400, maxWidth: 400, mx: "auto", backgroundColor: "#EEEEEE" }}
    >
      <img
      loading="lazy"
        alt="nos produits"
        src={img}
        width={"280px"}
        height={"250px"}
        style={{ objectFit: "contain", display: "block", margin: "0 auto" }}
      />
      <Typography variant={"h6"} align="center" sx={{ mt: 2 }}>
        {subtitle}
      </Typography>
      {children}
    </Paper>
  );
};
export default Product;
