import React from "react";
import { Navigate } from "react-router-dom";

function StudentPriviteRoute() {
  if (localStorage.getItem("student")) {

    return props.children;

  } else {

    return <Navigate to={"/login"} />;

  }
}

export default StudentPriviteRoute;
