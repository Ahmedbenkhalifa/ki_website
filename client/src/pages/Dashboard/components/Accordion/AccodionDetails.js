import React, { useEffect, useState } from "react";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PublicationItem from "../PublicationItem";
import axios from "axios";
import EmptyPublication from "../EmptyPublication";

const AccodionDetails = ({ row, title, isOpen, expanded, handleChange }) => {
  return (
    <MuiAccordion expanded={isOpen || expanded} onChange={handleChange(true)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 2 }}>
        {row ? (
          <Content row={row} />
        ) : (
          "Cliquer sur le bouton 'DETAILS' pour voir les dérnieres publications du Client"
        )}
      </AccordionDetails>
      <Divider variant="middle" sx={{ my: 2 }} />
    </MuiAccordion>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#EEE",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

const Content = ({ row }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [AllPosts, setAllPosts] = useState([]);
  const getAllPublicationsByUserId = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/api/publication/getPubById/${row._id}`);
      setIsLoading(false);
      setAllPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPublicationsByUserId();
  }, [row._id]);
  return (
    <Grid container spacing={0}>
      {isLoading && (
        <Box sx={{ margin: "30px auto", width: "80px", height: "80px" }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      {!isLoading &&
        AllPosts.map((post, key) => (
          <Grid item xs={12} key={key}>
            <PublicationItem post={post} />
          </Grid>
        ))}
      {!isLoading && AllPosts.length === 0 && <EmptyPublication />}
    </Grid>
  );
};


export default AccodionDetails;
