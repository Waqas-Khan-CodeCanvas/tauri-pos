import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Settings() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Settings</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
