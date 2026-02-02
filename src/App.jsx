import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import Sales from "./pages/Sales";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export default function App() {
  const { user, page, setPage } = useContext(AuthContext);

  if (!user) return <Login />;

  return (
    <div>
      <nav>
        <button onClick={() => setPage("sales")}>Sales</button>
        <button onClick={() => setPage("inventory")}>Inventory</button>
        <button onClick={() => setPage("reports")}>Reports</button>
        <button onClick={() => setPage("settings")}>Settings</button>
      </nav>

      {page === "sales" && <Sales />}
      {page === "inventory" && <Inventory />}
      {page === "reports" && <Reports />}
      {page === "settings" && <Settings />}
    </div>
  );
}
