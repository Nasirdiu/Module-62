import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebace.init";
import Loadding from "../../Shared/Loadding/Loadding";

const RequireAuth = ({ children }) => {
  const [user,loadding] = useAuthState(auth);
  const location = useLocation();

  if(loadding){
    return <Loadding></Loadding>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
