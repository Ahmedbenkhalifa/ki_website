import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import lstImg from "../../assets/images/lst127.png";
import { animateScroll as scroll } from "react-scroll";
import ModalOrder from "../../components/ModalOrder.js";
import Contact from "../../components/Contact";

const ProductMagazine = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    scroll.scrollToTop({
      smooth: false,
      duration: 0,
    });
  }, []);
  return (
    <>
    <Box sx={{ mt: 8, py: 4, backgroundColor: "#EEEEEE" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <img
            loading="lazy"
            width={"200px"}
            height={"200px"}
            alt="produit"
            src={lstImg}
            style={{ objectFit: "contain" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              ml: 5,
              flex: 1,
            }}
          >
            <Typography align="center" variant={matches ? "h5" : "h4"} sx={{ fontWeight: "bold" }}>
              {"LA LETTRE DU SUPPORT TECHNIQUE (LST)"}
            </Typography>
            <Typography align="center" variant="h6">
              {"Le magazine de WINDEV, WEBDEV et WINDEV Mobile"}
            </Typography>
          </Box>
        </Box>
        {/* ----------------- */}
        <Divider variant="middle" sx={{ my: 2 }} />
        <Grid container sx={{ pt: 4 }} spacing={3}>
          <Grid item md={6} xs={12}>
            <img
              style={{
                objectFit: "contain",
                maxWidth: "400px",
                maxHeight: "330px",
                margin: "0 auto",
                display: "block",
              }}
              width={"100%"}
              src={"https://pcsoft.fr/lst/img/lst127/goodies-696px-texte.webp?202012021721"}
              alt="product information"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <Typography variant="h6">
                La LST vous permet de bénéficier chaque trimestre :
              </Typography>
              <Box component="ul">
                <Typography component="li">
                  des <span style={{ fontWeight: "bold" }}>questions</span> (et leurs réponses) les
                  plus posées au Support Technique,
                </Typography>
                <Typography component="li">
                  des {<span style={{ fontWeight: "bold" }}>conseils techniques</span>} dans tous
                  les domaines technologiques,
                </Typography>
                <Typography component="li">des sujets de fond sur le développement,</Typography>
                <Typography component="li">
                  des programmes ({<span style={{ fontWeight: "bold" }}>avec code source</span>})
                  livrés sur la Clé USB d'accompagnement.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider variant="middle" sx={{ my: 2 }} />
        <Button
        onClick={handleOpen} 
          variant="contained"
          sx={{ p: 1, width: "200px", display: "block", m: "auto", border: "1px solid" }}
        >
          Commander
        </Button>
      </Container>
    </Box>
    <ModalOrder product={'LST'} open={open} handleClose={handleClose} />
     <Contact />
    </>
  );
};

export default ProductMagazine;
