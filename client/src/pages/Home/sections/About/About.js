import {  Container, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Separator from "../../../../assets/images/Separator";

const About = () => {
  const theme=useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container maxWidth="lg" sx={{ my: 8,p:6,borderRadius:'10px',backgroundColor:'#EEEEEE'}} id={"sectionPrésentation"}>
      <Typography variant={matches? "h4" :"h3"} align="center" sx={{color:theme.palette.secondary.main, fontWeight: 'bold'}}>
        A PROPOS
      </Typography>
      <Typography variant={matches? "h5" :"h4"}  align="center" sx={{}}>
       DE KHARRAZ INFORMATIQUE
      </Typography>
      <Separator width={'200px'} style={{display:'block',margin:'10 auto'}}/>
      <Typography variant='body1'sx={{ [theme.breakpoints.up('md')]: {fontSize:20}}}>
        Depuis sa création en 2005, La société{<span style={{fontWeight:'bold'}}> Kharraz Informatique</span>} est le premier
        Distributeur Officiel des produits Pc Soft en Tunisie, la
        société fait partie du Groupe KHARRAZ. Forts de
        notre expérience dans la gestion d’unités industrielles et de nos
        compétences dans le domaine de l’informatique, nous avons développé
        l’activité informatique avec une large gamme de solutions.
      </Typography>
       {/* <Button variant='outlined' color='secondary' sx={{display:'block',m:'15px auto 0'}}>Lire la suite</Button> */}
     <Divider variant="middle" sx={{mt:4}} />
    </Container>
  );
};

export default About;
