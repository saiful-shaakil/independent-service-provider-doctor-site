import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

// this function is for secure a router. by using this function, an un authorized user can't access a router
//until he sign in .
const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  // this "if" to keep a user in a secure router if he refresh the website
  if (loading) {
    return;
  }
  // without being a user. no one can't access the router if the router is secured by this function.
  if (!user) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }
  return children;
};

export default RequireAuth;
