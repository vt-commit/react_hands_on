import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  //receiving data
  const { user } = useContext(UserContext);

  //conditional return
  if (!user) return <div>Please login to continue.</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
