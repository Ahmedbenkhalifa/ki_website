import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "../../../../components/Carousel/Carousel";
import coficab from "../../../../assets/images/references/coficab.jpg";
import greenTunisie from "../../../../assets/images/references/GreenTunisie.jpg";
import ImprimerieOfficielle from "../../../../assets/images/references/impr.jpg";
import LaPosteTunisienne from "../../../../assets/images/references/LaPosteTunisienne.png";
import MutuelleAssurancedelEnseignement from "../../../../assets/images/references/MAE.jpg";
import OfficedesOeuvresUniversitairepourleSud from "../../../../assets/images/references/office.jpg";
import OfficeNationaldelAssainissement from "../../../../assets/images/references/oous.jpg";
import socTunisiennedAconnage from "../../../../assets/images/references/STAM.jpg";
import RNE from "../../../../assets/images/references/RNE.jpg";
import Soroubat from "../../../../assets/images/references/soroubat.jpg";

const Clients = () => {
  return (
    <Box>
      <Typography align="center" variant="h5" sx={{ fontWeight: "600" }}>
        Ils utilisent WINDEV
      </Typography>
      <Typography
        align="center"
        color='secondary'
        sx={{ display: "block",textDecoration:'underline',mb:3}}
        component="a"
        href={"https://pcsoft.fr/pcsoft/120pages/index.html?201907161854"}
        target="_blank"
        rel="noreferrer"
      >
        Voir les témoignages 01net
      </Typography>
      <Carousel
        sx={{ my: 2, px: 2 }}
        arrows={false}
        slidesToShow={4}
        autoplaySpeed={2000}
        responsive={[
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {logoCarousel.map((elem, k) => (
          <img
          alt='nos clients'
          src={elem}
            key={k}
            width={"150px"}
            height={"150px"}
            style={{objectFit:'contain',display:"block", margin: "0 auto" }}
          />
        ))}
      </Carousel>
    </Box>
  );
};

const logoCarousel = [
  coficab,
  greenTunisie,
  ImprimerieOfficielle,
  LaPosteTunisienne,
  MutuelleAssurancedelEnseignement,
  OfficedesOeuvresUniversitairepourleSud,
  OfficeNationaldelAssainissement,
  socTunisiennedAconnage,
  RNE,
  Soroubat,
];
export default Clients;
