import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Menu from "../../../components/Navbar/Menu";
import HamburgerMenu from "../../../components/Navbar/HamburgerMenu";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CategoryIcon from '@mui/icons-material/Category';

const drawerWidth = 240;
const SideBar = ({ isAdmin, children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="absolute" color="secondary" open={open && !matches}>
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              display: { md: "block", xs: "none" },
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography component="h1" variant="h6" color="inherit">
              Espace {isAdmin ? "Admin" : "Client"}
            </Typography>
            {/* Menu NAVBAR */}
            <Box sx={{ display: { md: "block", xs: "none" } }}>
              <Menu sx={{ alignItems: "center" }} />
            </Box>
            <Box sx={{ display: { md: "none", xs: "block" } }}>
              <HamburgerMenu />
            </Box>
            {/* {-----------------} */}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open && !matches}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <ListDrawer isAdmin={isAdmin} />
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: "#EEEEEE",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ my: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

const ListDrawer = ({ isAdmin }) => {
  const navigate = useNavigate();
  return isAdmin ? (
    <List component="nav">
      <ListItemButton onClick={() => navigate("")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Clients" />
      </ListItemButton>
      <Divider sx={{ my: 1 }} />
      <ListItemButton onClick={() => navigate("publication")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Publications" />
      </ListItemButton>
    </List>
  ) : (
    <>
      <List component="nav">
        <ListItemButton onClick={() => navigate("")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Publications" />
        </ListItemButton>
        <Divider sx={{ my: 1 }} />
        <ListItemButton onClick={() => navigate("/dashboard?filtre=Recrutement")}>
          <ListItemIcon>
            <PersonSearchIcon />
          </ListItemIcon>
          <ListItemText primary="Recrutement" />
        </ListItemButton>
        <Divider sx={{ my: 1 }} />
        <ListItemButton onClick={() => navigate("/dashboard?filtre=Services")}>
          <ListItemIcon>
            <EngineeringIcon />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItemButton>
        <Divider sx={{ my: 1 }} />
        <ListItemButton onClick={() => navigate("/dashboard?filtre=Produits")}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Produits" />
        </ListItemButton>
        <Divider sx={{ my: 1 }} />
        <ListItemButton onClick={() => navigate("/dashboard?filtre=Divers")}>
          <ListItemIcon>
            <AutoAwesomeMotionIcon />
          </ListItemIcon>
          <ListItemText primary="Divers" />
        </ListItemButton>
        <Divider sx={{ my: 1 }} />
        <ListItemButton
          sx={{ backgroundColor: "#EBD671", "&:hover": { backgroundColor: "#EBD671" } }}
          onClick={() => navigate("add_publication")}
        >
          <ListItemIcon>
            <AddBoxIcon sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Ajouter  publication" />
        </ListItemButton>
      </List>
    </>
  );
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  })
);
export default SideBar;
