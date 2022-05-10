import React from "react";
import { Button, Stack } from "@mui/material";
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll/modules";
import {  useSelector } from "react-redux";
import AccountMenu from "./AccountMenu";

const smoothScrollProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};
const Menu = ({...rest}) => {
  const router = useLocation();
  const {isAuth,isLoading} = useSelector((state) => state.userReducer);
  const navigateTo = useNavigate();
  const navigate = (section) => {
    if (router.pathname.slice(0,8) === "/product" && section==="sectionContact"){
      return null
    }
    else if (router.pathname !== "/" ) {
      navigateTo("/");
      setTimeout(() => scroller.scrollTo(section, { ...smoothScrollProps }), 30);
    }
  };
 
  const signIn = () => {
    navigateTo("/login");
  };
  return (
    <Stack direction="row" spacing={1} {...rest}>
      {["Accueil", "Présentation", "Produits", "Témoignages"].map((elem, k) => (
        <Link
          key={k}
          {...smoothScrollProps}
          onClick={() => navigate(`section${elem}`)}
          to={"section" + elem}
        >
          <Button color="inherit">{elem}</Button>
        </Link>
      ))}
      <Link   onClick={() =>navigate('sectionContact')} {...smoothScrollProps} to={"sectionContact"}>
        <Button variant="contained">Contact</Button>
      </Link>
      {!isLoading && (isAuth ? (
        <AccountMenu/>
      ) : (
        <ButtonCustom signIn={signIn}/>
      
      ))}
    </Stack>
  );
};

const ButtonCustom =({signIn}) => {
  return (
    <Button sx={{fontSize:'13px'}} onClick={signIn} variant="contained">
    Me connecter
  </Button>
  )
}

export default Menu;
