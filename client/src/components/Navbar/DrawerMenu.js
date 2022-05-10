import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Link from "react-scroll/modules/components/Link";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll/modules";
import { useSelector } from "react-redux";
import AccountMenu from "./AccountMenu";
import { Button } from "@mui/material";

const smoothScrollProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500,
};
export default function DrawerMenu({ isOpen, handleClose }) {
  const router = useLocation();
  const navigateTo = useNavigate();
  const { isAuth, isLoading } = useSelector((state) => state.userReducer);
  const navigate = (section) => {
    if (router.pathname.slice(0,8) === "/product" && section==="sectionContact"){
      return null
    }
    if (router.pathname !== "/") {
      navigateTo("/");
      setTimeout(() => scroller.scrollTo(section, { ...smoothScrollProps }), 30);
    }
  };
  const signIn = () => {
    navigateTo("/login");
  };
  const list = (anchor) => (
    <Box
      sx={{
        height: "100%",
        width: 250,
      }}
      role="presentation"
    >
      <List sx={{ mt: 8 }}>
        {["Accueil", "Présentation", "Produits", "Témoignages", "Contact"].map((text, index) => (
          <div key={index}>
            <Link
              {...smoothScrollProps}
              onClick={() => navigate(`section${text}`)}
              to={"section" + text}
            >
              <ListItem
                onClick={handleClose}
                sx={{
                  py: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                }}
                button
                key={text}
              >
                {text}
              </ListItem>
            </Link>
            <Divider variant="middle" sx={{ width: "50%", margin: "0 auto" }} />
          </div>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          {!isLoading &&
            (isAuth ? (
              <Box>
                <AccountMenu />
              </Box>
            ) : (
              <ButtonCustom signIn={signIn} />
            ))}
        </Box>
      </List>
    </Box>
  );

  return (
    <Drawer anchor={"left"} open={isOpen} onClose={handleClose}>
      {list("left")}
    </Drawer>
  );
}

const ButtonCustom = ({ signIn }) => {
  return (
    <Button sx={{ fontSize: "13px" }} onClick={signIn} variant="contained">
      Me connecter
    </Button>
  );
};
