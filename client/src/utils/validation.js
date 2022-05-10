import * as Yup from "yup";

export const firstNameValidation = Yup.string().max(20).required("Le prénom est requis");
export const lastNameValidation = Yup.string().max(20).required("Le nom est requis");
export const regionValidation = Yup.string().required("La région est requis");
export const companyNameValidation = Yup.string().max(20);
export const emailValidation = Yup.string()
  .email("L'e-mail n'est pas valide")
  .required("L'e-mail est requis");
export const passwordValidation = Yup.string()
  .min(6, "le mot de passe doit faire entre 6 et 20 caractères")
  .max(20, "le mot de passe doit faire entre 6 et 20 caractères")
  .required("Le mot de passe est requis");
export const confirmPasswordValidation = Yup.string()
  .min(6)
  .max(20)
  .required("La confirmation du mot de passe est requise")
  .oneOf([Yup.ref("password"), null], "Les mots de passes de correspondent pas");
export const policyValidation = Yup.boolean().oneOf(
  [true],
  "Vous devez acceptez les conditions d'utlisations"
);

export const registerValidation = Yup.object({
  firstName: Yup.string().max(20).required("Le prénom est requis"),
  lastName: Yup.string().max(20).required("Le nom est requis"),
  companyName: Yup.string().max(20),
  email: Yup.string().email("L'e-mail n'est pas valide").required("L'e-mail est requis"),
  region: Yup.string().required("La région est requis"),
  password: Yup.string()
    .min(6, "le mot de passe doit faire entre 6 et 20 caractères")
    .max(20, "le mot de passe doit faire entre 6 et 20 caractères")
    .required("Le mot de passe est requis"),
  confirmPassword: Yup.string()
    .min(6)
    .max(20)
    .required("La confirmation du mot de passe est requise")
    .oneOf([Yup.ref("password"), null], "Les mots de passes de correspondent pas"),
  policy: Yup.boolean().oneOf([true], "Vous devez acceptez les conditions d'utlisations"),
});

export const loginValidation = Yup.object({
  email: Yup.string().email("L'e-mail n'est pas valide").required("L'adresse e-mail est requise"),
  password: Yup.string()
    .min(6, "le mot de passe doit faire entre 6 et 20 caractères")
    .max(20, "le mot de passe doit faire entre 6 et 20 caractères")
    .required("Le mot de passe est requis"),
});

export const publicationValidation = Yup.object({
  impact: Yup.string().required("L'impact est requis "),
  title: Yup.string().max(20).required("Le titre est requis"),
  description: Yup.string()
    .max(300, "le contenue de publication ne doit pas dépasser 300 caractères")
    .required("La description est requis"),
});

export const EmailSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email adress is not valid").required("Email adress is required"),
  message: Yup.string().required("message is required"),
});

export const OrderSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email adress is not valid").required("Email adress is required"),
  message: Yup.string().required("message is required"),
  order: Yup.string().required("select order"),
});
