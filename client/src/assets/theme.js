import { createTheme } from "@mui/material";

const theme = createTheme({

  palette: {
    mode:"light",
    primary: {
      main: "#EBD671",
      contrastText: "rgb(30,30,30)",
    },
    secondary:{
      main:"#6FB2D2",
      contrastText:"#ffffff"
    }
  },
  typography:{
    fontFamily:"'Poppins', sans-serif"
  }
});
export default theme;
