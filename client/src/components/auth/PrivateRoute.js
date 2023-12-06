import React, { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../context/authContext/authContext"

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const context = useContext(AuthContext);
  const location = useLocation();

  return (
    context.isLoggedIn ? (
      <Component />
    ) : (
      <Navigate
        to={{ pathname: "/signin", state: { from: location } }}
      />
    )
  )
}