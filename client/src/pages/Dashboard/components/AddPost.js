import React from "react";
import { Button, CircularProgress, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { publicationValidation } from "../../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../actions/postActions";

const AddPost = () => {
  const dispatch = useDispatch();
  const { isLoadingLocal } = useSelector((state) => state.userReducer);
  const formik = useFormik({
    initialValues: {
      impact: "",
      title: "",
      description: "",
    },
    validationSchema: publicationValidation,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(addPost(values));
      resetForm();
    },
  });
  const impacts = ["Recrutement", "Services", "Produits", "Divers"];
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5">Ajouter une publication</Typography>
      <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
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
          error={Boolean(formik.touched.impact && formik.errors.impact)}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.impact}
          helperText={formik.touched.impact && formik.errors.impact}
          id="impact"
          name="impact"
          select
          label="Impact"
          fullWidth
          autoComplete="off"
          variant="filled"
          required
          margin="normal"
          color="secondary"
        >
          {impacts.map((option, key) => (
            <MenuItem key={key} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
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
          id="description"
          label="Description"
          color="secondary"
          minRows={4}
          multiline
        />
        <Button type="submit" variant="outlined" color="secondary" sx={{ width: "85px", my: 2 }}>
          {isLoadingLocal ? <CircularProgress size={24} color="secondary" /> : "Publier"}
        </Button>
        <Button type="submit" variant="outlined" color="error" sx={{ my: 2, ml: 2 }}>
          Supprimer
        </Button>
      </form>
    </Paper>
  );
};

export default AddPost;
