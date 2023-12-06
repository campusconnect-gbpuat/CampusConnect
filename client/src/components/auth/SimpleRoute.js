import React, { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../../context/authContext/authContext"

export const SimpleRoute = ({ component: Component, ...rest }) => {
  const context = useContext(AuthContext);
  const location = useLocation();

  return (
    !context.isLoggedIn ? (
      <Component />
    ) : (
      <Navigate to={{ pathname: "/", state: { from: location } }} />
    )
  )
}
