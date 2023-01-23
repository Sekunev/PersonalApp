import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const isActive = localStorage.getItem("isActive");
  // const { token } = useSelector((state) => state.auth);

  // return token ? <Outlet /> : <Navigate to="/login" />;
  return isActive ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
