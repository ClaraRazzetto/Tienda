import React from 'react';
import removeFromCart from "../components/Products/removeFromCart"
import { FirebaseApp } from 'firebase/app';

const ShoppingCart = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No hay items en el carrito.</p>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
