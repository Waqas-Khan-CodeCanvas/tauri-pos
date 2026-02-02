import React, { useState } from "react";
import BookSearch from "../components/BookSearch";
import Cart from "../components/Cart";
import ReceiptPreview from "../components/ReceiptPreview";

export default function Sales() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h2>Sales</h2>
      <BookSearch onAdd={book => setCart([...cart, book])} />
      <Cart items={cart} setItems={setCart} />
      <ReceiptPreview items={cart} />
    </div>
  );
}
