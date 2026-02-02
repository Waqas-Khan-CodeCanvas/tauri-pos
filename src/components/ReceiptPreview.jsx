import React from "react";

export default function ReceiptPreview({ items }) {
  return (
    <div>
      <h3>Receipt</h3>
      {items.map((i, idx) => (
        <div key={idx}>{i.title} - ${i.price}</div>
      ))}
    </div>
  );
}
