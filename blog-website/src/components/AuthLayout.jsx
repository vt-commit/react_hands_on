import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //else if: if user is logged in and trying to access login or signup, then redirect them to home (/)
    //if: if user is not logged in and trying to access page which requires login then for that page authentication = true, authStatus = false then redirect to /login.
    //for any other condition useEffect both conditions will be false and return the component
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return loader ? <h1>Loading....</h1> : <>{children}</>;
}
