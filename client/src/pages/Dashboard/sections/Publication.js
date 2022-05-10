import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PublicationItem from "../components/PublicationItem";
import { useSearchParams } from "react-router-dom";
import EmptyPublication from "../components/EmptyPublication";

const Publication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [myPosts, setMyPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("filtre");
  const getAllPublications = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/api/publication/getAllPublications");
      setIsLoading(false);
      setMyPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const filtrePost = (list, filtredBy) => {
    if (!filtredBy) {
      return list;
    }
    return list.filter((element) => element.impact === filtredBy);
  };
  useEffect(() => {
    getAllPublications();
  }, []);

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Liste des Publications {searchTerm}
      </Typography>
      {isLoading && (
        <Box sx={{ margin: "30px auto", width: "80px", height: "80px" }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      {!isLoading &&
        filtrePost(myPosts, searchTerm).map((post, key) => (
          <PublicationItem key={key} post={post} />
        ))}
      {!isLoading && filtrePost(myPosts, searchTerm).length === 0 && <EmptyPublication />}
    </Paper>
  );
};

export default Publication;
