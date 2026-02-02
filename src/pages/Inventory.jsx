import React, { useEffect, useState } from "react";
import { getInventory } from "../api/tauri";

export default function Inventory() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getInventory().then(setBooks);
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {books.map(b => (
          <li key={b.id}>{b.title} ({b.stock})</li>
        ))}
      </ul>
    </div>
  );
}
