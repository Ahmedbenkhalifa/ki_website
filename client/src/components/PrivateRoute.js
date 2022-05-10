import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children}) => {
  const { isAuth, isLoading } = useSelector((state) => state.userReducer);
  if (!isAuth && !isLoading) {
    return <Navigate to="/login" />;
  } else {
    return children
  }
};

export default PrivateRoute;
