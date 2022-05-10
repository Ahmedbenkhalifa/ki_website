import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import Check from "../../assets/images/Check";
import { EmailSchema, OrderSchema } from "../../utils/validation";

const EmailBox = ({ product: productName, isOrder }) => {
  const [sending, setSending] = useState(false);
  const [sendEmailSuccess, setSendEmailSuccess] = useState(false);
  const SendEmail = (object) => {
    setSending(true);
    emailjs
      .send(
        "service_25gmfj8",
        isOrder ? "template_m58vmty" : "template_szriehi",
        object,
        "nX2KWK0GMslTI3JwE"
      )
      .then(
        (result) => {
          setSendEmailSuccess(true);
          setSending(false);
        },
        (error) => {
          setSending(false);
        }
      );
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      order: productName,
    },
    validationSchema: isOrder ? OrderSchema : EmailSchema,
    onSubmit: (values) => {
      SendEmail(values);
      setSendEmailSuccess(true);
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <Box overflow="hidden" style={{ position: "relative", minHeight: "300px" }}>
      <AnimatePresence>
        {!sendEmailSuccess && (
          <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
            {isOrder && (
              <Typography variant="h5" align="center" sx={{ mb: 2 }}>
                Réserver votre commande
              </Typography>
            )}
            {isOrder && (
              <TextField
                error={Boolean(formik.touched.order && formik.errors.order)}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.productName}
                helperText={formik.touched.order && formik.errors.order}
                variant="filled"
                type="text"
                fullWidth
                id="order"
                label={`Commander ${productName}`}
                order="order"
                color="secondary"
                disabled
              />
            )}
            <TextField
              error={Boolean(formik.touched.name && formik.errors.name)}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              helperText={formik.touched.name && formik.errors.name}
              variant="filled"
              type="text"
              fullWidth
              id="name"
              label="Nom Complet"
              name="name"
              color="secondary"
              margin={isOrder ? "normal" : "none"}
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              helperText={formik.touched.email && formik.errors.email}
              variant="filled"
              type="email"
              margin="normal"
              fullWidth
              id="email"
              label="Adresse e-mail"
              name="email"
              color="secondary"
            />
            <TextField
              error={Boolean(formik.touched.message && formik.errors.message)}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.message}
              helperText={formik.touched.message && formik.errors.message}
              variant="filled"
              margin="normal"
              fullWidth
              name="message"
              label="Message"
              type="text"
              id="message"
              multiline
              minRows={5}
              color="secondary"
            />
            <Box display="flex" justifyContent="center" mt={2}>
              <Button
                sx={{ width: "200px" }}
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                disabled={sending}
              >
                {isOrder ? "Réserver" : "Envoyer votre message"}
              </Button>
            </Box>
          </form>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {sendEmailSuccess && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{
              position: "absolute",
              top: 0,
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box m={2}>
              <Check width="150" />
            </Box>
            <Typography
              component={motion.h4}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              variant="body2"
            >
              Votre message a été envoyé avec succès.
            </Typography>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default EmailBox;
