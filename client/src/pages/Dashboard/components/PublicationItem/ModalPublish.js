import React from "react";
import { Box, Button, ButtonGroup, Modal, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const ModalPublish = ({ post, open, handleClose, handlePublish }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "500px",
    height: "500px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const formik = useFormik({
    initialValues: {
      title: post.title,
      description: post.description,
    },
    validationSchema: Yup.object({
      title: Yup.string().max(20).required("Le prénom est requis"),
      description: Yup.string().max(20).required("Le nom est requis"),
    }),
    onSubmit: (values) => {
      handlePublish(values)
      console.log(values);
    },
  });

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        component="form"
        sx={style}
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <Box>
          <Typography align="center" variant="h4" sx={{ mt: 4 }}>
            vérification
          </Typography>
          <Typography align="center" variant="body1" sx={{ color: "GrayText" }}>
            vérifier avant de publier
          </Typography>
          <TextField
            error={Boolean(formik.touched.title && formik.errors.title)}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.title}
            helperText={formik.touched.title && formik.errors.title}
            autoComplete="off"
            name="title"
            variant="filled"
            required
            fullWidth
            id="title"
            label="Titre"
            color="secondary"
            margin="normal"
          />
          <TextField
            error={Boolean(formik.touched.description && formik.errors.description)}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
            helperText={formik.touched.description && formik.errors.description}
            autoComplete="off"
            name="description"
            variant="filled"
            required
            fullWidth
            margin="normal"
            id="description"
            label="Description"
            color="secondary"
            multiline
            minRows={3}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button type="submit" sx={{ mr: 2 }} color="secondary" variant="outlined">
            Publier
          </Button>
          <Button color="error" variant="outlined" onClick={handleClose}>
            Anuller
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalPublish;
