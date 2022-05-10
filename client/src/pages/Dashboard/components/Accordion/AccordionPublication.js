import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PublicationItem from "../PublicationItem/PublicationItem";
import axios from "axios";
import { useSelector } from "react-redux";

const AccodionPublication = () => {
  const { isLoadingLocal } = useSelector((state) => state.userReducer);
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [myPosts, setMyPosts] = useState([]);
  const getAllPublications = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/api/publication/getAllMyPub");
      setMyPosts(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const handleChange = (open) => (event, newExpanded) => {
    setExpanded(newExpanded ? open : false);
    if (newExpanded) {
      // Accordion Is Open
      getAllPublications();
    }
  };
  useEffect(() => {
    if (!isLoadingLocal) {
      getAllPublications();
    }
    // getAllPublications();
  }, [isLoadingLocal]);
  return (
    <Accordion expanded={expanded} onChange={handleChange(true)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">Mes Publication</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {(isLoadingLocal || (isLoading && myPosts.length === 0)) && (
          <Box sx={{ margin: "20px auto", width: "80px", height: "80px" }}>
            <CircularProgress color="secondary" />
          </Box>
        )}
        {!isLoading&&!isLoadingLocal&&myPosts.length !== 0 &&
          myPosts.map((post, key) => <PublicationItem key={key} post={post} />)}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccodionPublication;
