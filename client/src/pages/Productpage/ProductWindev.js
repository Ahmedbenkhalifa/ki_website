import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Inclusive from "../../components/Inclusive/Inclusive";
import ProductInformation from "../../components/ProductInformation.js";
import Contact from "../../components/Contact";
import { animateScroll as scroll } from "react-scroll";

const ProductWindev = ({product,imgProduct,title,subtitle,imgInfo ,options,includes,subsubtitle,description}) => {
  useEffect(() => {
    scroll.scrollToTop({
      smooth: false,
      duration: 0,
    });
  }, []);
  return (
    <>
      <Box sx={{ mt: 8, py: 4, backgroundColor: "#EEEEEE" }}>
        <ProductInformation
        product= {product}
          img={imgProduct}
          title={title}
          subtitle={subtitle}
          imgInfo={imgInfo}
          options={options}
        />
      </Box>
      <Inclusive list={includes} subsubtitle={subsubtitle} description={description} />
      <Contact />
    </>
  );
};

export default ProductWindev;
