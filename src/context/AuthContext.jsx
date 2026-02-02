import React, { createContext, useState } from "react";
import { login as loginApi } from "../api/tauri";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("sales");

  const login = async (username, password) => {
    const result = await loginApi(username, password);
    setUser(result);
  };

  const logout = () => {
    setUser(null);
    setPage("sales");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, page, setPage }}>
      {children}
    </AuthContext.Provider>
  );
}
