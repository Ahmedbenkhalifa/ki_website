import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Divider, Paper, TextField, Typography, useMediaQuery } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import UpdateIcon from "@mui/icons-material/Update";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import EditInput from "../components/EditInput";

const Profil = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const user = useSelector((state) => state.userReducer.user);
  const [disabled, setDisabled] = useState(true);
  const handleClick = () => {
    setDisabled(!disabled);
  };
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: "500" }}>
        Mon Profil 
      </Typography>
      <Typography variant="body2" sx={{ color: "GrayText" }}>
        Gérez les paramètres de votre profil
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: !matches ? "center" : "flex-start",
          my: 2,
          flexDirection: matches ? "column" : "",
        }}
      >
        <img
          alt="img profil"
          src={user.avatar}
          style={{
            borderRadius: "50%",
            width: matches ? "136px" : "176px",
            height: matches ? "136px" : "176px",
            boxShadow:
              "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)",
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", mt: 2, ml: matches ? 0 : 5 }}>
          <Button variant="outlined" color="secondary" sx={{ mb: 1 }} onClick={handleClick}>
            <UpdateIcon sx={{ mr: 1 }} />
            Modifier
          </Button>
        </Box>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Box sx={{ width: matches ? "100%" : "500px" }}>
        <EditInput
          label={"Prénon"}
          initial={user.firstName}
          validation={Yup.string().max(20).required("Le prénom est requis")}
          disabled={disabled}
          dynamicKey={"firstName"}
        />
        
        <EditInput
          label={"Nom"}
          initial={user.lastName}
          validation={Yup.string().max(20).required("Le nom est requis")}
          id="lastName"
          disabled={disabled}
          dynamicKey={"lastName"}
        />
        <EditInput
          label={"Nom de la société"}
          initial={user.companyName}
          validation={Yup.string().max(20).required("Le nom est requis")}
          id="companyName"
          disabled={disabled}
          dynamicKey={"companyName"}
        />
        <EditInput
          label={"Email"}
          initial={user.email}
          validation={Yup.string()
            .email("L'e-mail n'est pas valide")
            .required("L'e-mail est requis")}
          id="email"
          disabled={disabled}
          dynamicKey={"email"}
        />
        <EditInput
          label={"Région"}
          initial={user.region}
          validation={Yup.string().required("La région est requis")}
          id="region"
          disabled={disabled}
          dynamicKey={"region"}
        />
        <EditInput
          label="Nouveau mot de passe"
          initial={""}
          validation={Yup.string()
            .min(6, "le mot de passe doit faire entre 6 et 20 caractères")
            .max(20, "le mot de passe doit faire entre 6 et 20 caractères")
            .required("Le mot de passe est requis")}
          id="password"
          disabled={disabled}
          placeholder="*****"
          dynamicKey={"password"}
        />
      </Box>
      <Divider sx={{ my: 2 }} />
    </Paper>
  );
};

export default Profil;
