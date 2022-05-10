import productimgWindev from "../assets/images/ProductimgWindev.png";
import productimgWebdev from "../assets/images/productimgWebdev.png";
import productimgWindevMobile from "../assets/images/productimgWindevMobile.png";
import windevInfoimg from '../assets/images/windevinformation.png'
import webdevInfoimg from '../assets/images/webdevinformation.png'
import windevMobileInfoimg from '../assets/images/windevMobileInformation.png'
import iconEnvInteg from '../assets/icons/envInteg.png'
import iconFormation from '../assets/icons/fromationIcon.png'
import iconTag from '../assets/icons/tagIcon.png'
import iconMobile from '../assets/icons/mobileIcon.png'
import iconDebug from '../assets/icons/debugIcon.png'
import crossIcon from '../assets/icons/crossIcon.png'
import ouvertIcon from '../assets/icons/ouvertIcon.png'
import satisfactionIcon from '../assets/icons/satisfactionIcon.png'
import cloudIcon from '../assets/icons/cloudIcon.png'
import internetIcon from '../assets/icons/InternetIcon.png'
import {
  webdevIncludes,
  windevIncludes,
  windevMobileIncludes,
} from "./ProductIncludes";


const windevOptions = [
  {
    icon: iconEnvInteg,
    title: "ENVIRONNEMENT INTÉGRÉ",
    subtitle:
      "TOUT INCLUS : DESIGNER, CODE, BASE DE DONNÉES, RAPPORT, DÉPLOIEMENT LIBRE, ...",
  },
  {
    icon: crossIcon,
    title: "CROSS-PLATEFORMES",
    subtitle: "WINDOWS, LINUX, MAC, WEB, IOS, ANDROID",
  },
  {
    icon: iconFormation,
    title: "FORMATION RAPIDE",
    subtitle: "TUTO INCLUS, FORMATION EN UNE SEMAINE",
  },
  {
    icon: ouvertIcon,
    title: "OUVERT À TOUS LES STANDARDS",
    subtitle: "VOUS NE SEREZ JAMAIS BLOQUÉ",
  },
  { icon: satisfactionIcon, title: "97,9% DE SATISFACTION" },
];

const webdevOptions = [
  {
    icon: iconEnvInteg,
    title: "ENVIRONNEMENT INTÉGRÉ",
    subtitle:
      "TOUT INCLUS : DESIGNER, CODE, BASE DE DONNÉES, RAPPORT, DÉPLOIEMENT LIBRE, ...",
  },
  {
    icon: cloudIcon,
    title: "SAAS",
  },
  {
    icon: iconFormation,
    title: "FORMATION RAPIDE",
    subtitle: "TUTO INCLUS, FORMATION EN UNE SEMAINE",
  },
  {
    icon: ouvertIcon,
    title: "OUVERT À TOUS LES STANDARDS WEB",
    subtitle: "VOUS NE SEREZ JAMAIS BLOQUÉ",
  },
  { icon: internetIcon, title: "INTERNET, INTRANET, CLOUD" },
];

const windevMobileOptions = [
  {
    icon: iconEnvInteg,
    title: "ENVIRONNEMENT INTÉGRÉ",
    subtitle:
      "TOUT INCLUS : DESIGNER, CODE, BASE DE DONNÉES, RAPPORT, DÉPLOIEMENT LIBRE, ...",
  },
  {
    icon: iconMobile,
    title: "IOS, ANDROID, WIN CE",
  },
  {
    icon: iconTag,
    title: "APPLICATIONS NATIVES",
  },
  {
    icon: iconFormation,
    title: "FORMATION RAPIDE",
    subtitle: "TUTO INCLUS, FORMATION EN UNE SEMAINE",
  },
  { icon: iconDebug, title: "DEBUG SUR LE MATÉRIEL" },
];


export const windev = {
  product: "Windev",
  imgProduct: productimgWindev,
  title: "DÉVELOPPEZ 10 FOIS PLUS VITE",
  subtitle: "WINDEV 27 AGL DevOps N°1 en France",
  options: windevOptions,
  imgInfo: windevInfoimg,
  includes: windevIncludes,
  subsubtitle: "WINDEV supporte tous les standards",
  description:
    "TSE & CITRIX - XML - JSON - XAML - LDAP - WEBSERVICES SOAP & REST - oAUTH - NFC - ODBC - OLE DB - TOUS CODES-BARRES - DOCX, XLSX, PDF - TOUS FORMATS D'IMAGES - APPEL DE DLL - ASSEMBLAGE .NET - API - CHIFFREMENTS AES256, DES, 3DES, ... - ZIP, RAR, CAB, 7Z, GZIP, TAR, TAR.GZ - SSL - iCALENDAR - IOT - USB ET RS 232 - BLUETOOTH - TWAIN - SOCKETS - BLOCKCHAIN - SMTP - POP - IMAP - RPC - DOMOTIQUE - SNMP - TAPI - PILOTAGE DE LOGICIEL - OPC, ...",
};

export const webdev = {
  product: "Webdev",
  imgProduct: productimgWebdev,
  title: "DÉVELOPPEZ 10 FOIS PLUS VITE VOS SITES ET APPLICATIONS WEB",
  subtitle: "WEBDEV 27, compatible WINDEV",
  imgInfo: webdevInfoimg,
  options: webdevOptions,
  includes: webdevIncludes,
  subsubtitle: "WEBDEV supporte tous les standards",
  description:
    "WEBSERVICES SOAP & REST - JSON - XML - TLS - HTML5 - CSS3 - JAVASCRIPT - ANGULAR - REACT - VUE - GOOGLE APPS - SAP - SAAS - SPA - OLE DB - ODBC - TOUS CODES-BARRES - DOCX, XLSX, PDF - TOUS FORMATS D'IMAGES - IMAP - SMTP - POP3 - CHIFFREMENTS AES256, DES, 3DES, ... - iCALENDAR - ZIP - GOOGLE MAPS, LEAFLET, MAPBOX - PAYBOX, PAYPAL, STRIPE - CHORUS PRO - ...",
};

export const windevMobile = {
  product: "Windev Mobile",
  imgProduct: productimgWindevMobile,
  title: "DÉVELOPPEZ 10 FOIS PLUS VITE VOS APPLIS MOBILES",
  subtitle: "WINDEV Mobile 27, compatible WINDEV",
  imgInfo: windevMobileInfoimg,
  options: windevMobileOptions,
  includes: windevMobileIncludes,
  subsubtitle: "WINDEV Mobile supporte tous les standards",
  description:
    "WEBSERVICES SOAP & REST - JSON - XML - OBJECTIVE-C - SWIFT - JAVA - IMAP - SMTP - POP3 - CHIFFREMENTS AES256, DES, 3DES, ... - ZIP - BLUETOOTH - NFC - BOUSSOLE - ACCELEROMETRE - RFID - IMPRESSION BLUETOOTH - DROPBOX - PAYPAL ...",
};