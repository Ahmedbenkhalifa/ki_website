import React from "react";
import ProductMagazine from "./pages/Productpage/ProductMagazine";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProductWindev from "./pages/Productpage/ProductWindev";
import { windev, webdev, windevMobile } from "./constants/ContentProduit";
import { Routes as RoutesRouter, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import GoToTop from "./components/GoToTop";
import Verify from "./pages/Verify";
import Forgotpassword from "./pages/Forgotpassword/Forgotpassword";
import Resetpassword from "./pages/Forgotpassword/Resetpassword";

const Routes = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.slice(0, 10) !== "/dashboard" && <Navbar />}
      {location.pathname.slice(0, 10) !== "/dashboard" && <GoToTop />}
      <RoutesRouter>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/product">
          <Route path="windev" element={<ProductWindev {...windev} />} />
          <Route path="webdev" element={<ProductWindev {...webdev} />} />
          <Route path="windevMobile" element={<ProductWindev {...windevMobile} />} />
          <Route path="lst" element={<ProductMagazine />} />
          </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/verify/:token" element={<Verify/>} />
        <Route path="/forgotPassword">
        <Route path="" element={<Forgotpassword />} />
        <Route path="resetPassword" element={<Resetpassword />} />
        </Route>
      </RoutesRouter>
    </>
  );
};

export { Routes };
