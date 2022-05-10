import React, { useState } from "react";
import { ButtonGroup, useMediaQuery, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PlaylistAddCheckCircleOutlinedIcon from "@mui/icons-material/PlaylistAddCheckCircleOutlined";
import axios from "axios";
import ModalPublish from "./ModalPublish";

const PublicationStatusControl = ({ post, changeStatus,changeContent }) => {
  const theme=useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = async (newStatus) => {
    setLoading(true);
    try {
      const { data } = await axios.put(`/api/publication/updateStatus/${post._id}`, {
        newStatus,
      });
      setLoading(false);
      changeStatus(newStatus);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handlePublish = async (formData) => {
    setLoading(true);
    try {
      const { data } = await axios.put(`/api/publication/publishPost/${post._id}`, formData);
      setLoading(false);
      changeContent(formData.title,formData.description)
      changeStatus("Publiée");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <ButtonGroup sx={{ my: 2 ,maxWidth:'100%'}}>
      <LoadingButton
        color="success"
        onClick={() => handleClick("Acceptée")}
        loading={loading}
        loadingPosition="start"
        startIcon={<CheckCircleOutlineIcon sx={{display:isMatch?'none':''}}/>}
        variant="outlined"
      >
        Accepter
      </LoadingButton>
      <LoadingButton
        color="error"
        onClick={() => handleClick("Refusée")}
        loading={loading}
        loadingPosition="start"
        startIcon={<HighlightOffIcon sx={{display:isMatch?'none':''}}/>}
        variant="outlined"
      >
        Refuser
      </LoadingButton>
      <LoadingButton
        color="secondary"
        onClick={() => handleOpen()}
        loading={loading}
        loadingPosition="start"
        startIcon={<PlaylistAddCheckCircleOutlinedIcon sx={{display:isMatch?'none':''}} />}
        variant="outlined"
      >
        Publier
      </LoadingButton>
      <ModalPublish
        post={post}
        open={open}
        handleClose={handleClose}
        handlePublish={handlePublish}
      />
    </ButtonGroup>
  );
};

export default PublicationStatusControl;
