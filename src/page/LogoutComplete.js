import React from "react";
import { useSelector } from "react-redux";

function LogoutComplete(props) {
  const isLogout = useSelector((state) => state.isLogout)

  return (
    <div>
      <h1>Logout 완료</h1>
      <h2>store isLogout : {isLogout.toString()}</h2>
    </div>
  );
}

export default LogoutComplete;