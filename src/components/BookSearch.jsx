import React, { useState } from "react";
import { searchBooks } from "../api/tauri";

export default function BookSearch({ onAdd }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const res = await searchBooks(query);
    setResults(res);
  };

  return (
    <div>
      <input placeholder="Search books" onChange={e => setQuery(e.target.value)} />
      <button onClick={search}>Search</button>

      <ul>
        {results.map(b => (
          <li key={b.id}>
            {b.title} - ${b.price}
            <button onClick={() => onAdd(b)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
