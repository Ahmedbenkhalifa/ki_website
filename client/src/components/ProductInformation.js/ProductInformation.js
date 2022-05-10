import React, { useState } from 'react'
import { Box, Button, Container, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import ModalOrder from '../ModalOrder.js';

const ProductInformation = ({product,img,title,subtitle,imgInfo,options}) => {
  const theme=useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="lg">
    <Box
          sx={{
            display: "flex",
            justifyContent:'space-evenly',
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              justifyContent:'center',
              alignItems:'center'
            },
          }}
        >
          <img
          loading="lazy"
            width={"200px"}
            height={"200px"}
            alt="produit"
            src={img}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              ml: 5,
              flex:1,
              mt:2
            }}
          >
            <Typography align="center"  variant={matches? "h5" :"h4"} sx={{fontWeight: "bold"}}>
              {title}
            </Typography>
            <Typography align="center" variant="h6">
              {subtitle}
            </Typography>
          </Box>
          </Box>
        {/* ----------------- */}
          <Divider variant="middle" sx={{ my: 2 }} />
        <Grid container sx={{ pt: 4 }} spacing={3}>
          <Grid item md={6} xs={12}>
            <img
              style={{ maxWidth: "450px", margin: "0 auto", display: "block" }}
              width={"100%"}
              src={imgInfo}
              alt='product information'
            />
          </Grid>
          <Grid item md={6} xs={12}>
            {options.map((elem, k) => (
              <Box key={k} sx={{ display: "flex" }}>
                {/* <IntegrationInstructionsIcon fontSize="large" sx={{mr:1}}/> */}
                <img src={elem.icon} width={'50px'} height={'50px'} alt='' style={{objectFit:'contain',marginRight:'5px'}}/>
                <Box>
                  <Typography variant="h6" >{elem.title}</Typography>
                  {elem.subtitle && (
                    <Typography variant="body2" sx={{mb:1}}>{elem.subtitle}</Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Divider variant="middle" sx={{ my: 2 }} />        
        <Button variant='contained' onClick={handleOpen} sx={{p:1,width:'200px',display:'block',m:'auto',border:'1px solid'}}>Commander</Button>
        <ModalOrder product={product} open={open} handleClose={handleClose} />
        </Container>
  )
}


export default ProductInformation