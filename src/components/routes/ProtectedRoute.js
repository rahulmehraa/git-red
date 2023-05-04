import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { handleLogout } from "../redux/features/loginModalSlice";

const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.modal);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
export default ProtectedRoutes;
