import React from "react";
import MuiModal from "@mui/material/Modal";
import {  Container } from "@mui/material";
import EmailBox from "../EmailBox";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth:'90%',
  bgcolor: "white",
  borderRadius: 2,
  boxShadow: 24,
  padding:"20px"
};
const ModalOrder = ({ product,open, handleClose }) => {
  return (
    <MuiModal  open={open} onClose={handleClose}>
      <Container maxWidth='sm' sx={style}>
       <EmailBox product={product} isOrder={true}/>
      </Container>
    </MuiModal>
  );
};

export default ModalOrder;
