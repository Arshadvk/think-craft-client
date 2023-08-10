import { Navigate } from "react-router-dom";

import React from "react";

export default function StudentPublicRoute(props) {
  if (localStorage.getItem("student")){
     return <Navigate to={"/"} />
    }
  else {
    return props.children
  }
}
