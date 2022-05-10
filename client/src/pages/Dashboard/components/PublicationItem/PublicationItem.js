import React, { useState } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import moment from "moment";
import PublicationStatusControl from "./PublicationStatusControl";

const PublicationItem = ({ post }) => {
  const role = useSelector((state) => state.userReducer.user.role);
  const isAdmin = role === "ADMIN";
  const [status, setStatus] = useState(post?.status);
  const [title, setTitle] = useState(post?.title);
  const [description, setDescription] = useState(post?.description);
  const changeStatus = (newStatus) => {
    setStatus(newStatus);
  };
  const changeContent = (title, description) => {
    setTitle(title);
    setDescription(description);
  };
  return (
    <Paper sx={{ px: 1, py: 2, mb: 2, backgroundColor: "#EEE" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" color="secondary" sx={{ mb: 1 }}>
            {post?.impact}
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", ml: 1 }}>
          <StatusBox status={!isAdmin && status === "Publiée" ? "Acceptée" : status} />
          <Typography variant="body2" align="center">
            {moment(post.createdAt).format("L")}
          </Typography>
        </Box>
      </Box>
      <Typography align="left" variant="body1">
        {description}
      </Typography>
      <Typography sx={{ mt: 1 }} variant="body2">
        publiée par: {post?.createrName}
      </Typography>
      {isAdmin ? (
        <PublicationStatusControl
          post={post}
          changeStatus={changeStatus}
          changeContent={changeContent}
          idPublication={post._id}
        />
      ) : (
        <Divider variant="middle" sx={{ my: 2 }} />
      )}
    </Paper>
  );
};

const StatusBox = ({ status }) => {
  let color = "";
  if (status === "En attente") {
    color = "warning";
  }
  if (status === "Acceptée") {
    color = "success";
  }
  if (status === "Refusée") {
    color = "error";
  }
  if (status === "Publiée") {
    color = "secondary";
  }

  return (
    <Button variant="outlined" color={color}>
      {status}
    </Button>
  );
};

export default PublicationItem;
