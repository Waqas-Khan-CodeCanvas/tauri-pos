import React, { useEffect, useState } from "react";
import { getReports } from "../api/tauri";

export default function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports().then(setReports);
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      <pre>{JSON.stringify(reports, null, 2)}</pre>
    </div>
  );
}
