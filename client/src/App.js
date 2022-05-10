import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./assets/theme";
import { BrowserRouter } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { useEffect } from "react";
import { getAuthUser } from "./actions/authActions";
import { Routes } from "./Routes";

function App() {
  const { isLoadingInitial } = useSelector(state=>state.userReducer)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
         {!isLoadingInitial && <Routes />}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
