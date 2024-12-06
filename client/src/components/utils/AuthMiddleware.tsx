import { useAuth } from "@/hooks";
import React from "react";
import { Navigate } from "react-router-dom";

const AuthMiddleware = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();

  if (token) {
    return <Navigate to="/home" />;
  }

  return <> {children} </>;
};

export default AuthMiddleware;
