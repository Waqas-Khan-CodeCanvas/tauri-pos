import React from "react";

export default function Cart({ items, setItems }) {
  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {items.map((i, idx) => (
          <li key={idx}>{i.title} - ${i.price}</li>
        ))}
      </ul>
      <strong>Total: ${total}</strong>
    </div>
  );
}
