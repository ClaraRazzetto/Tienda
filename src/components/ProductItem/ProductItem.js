import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import DeleteProduct from '../DeleteProduct.js/DeleteProduct';
import EditProduct from '../EditProduct.js/EditProduct';

const ProductItem= ({ id, name, category, size, price, img, description, total }) => {
  
  //VER
  const [ProductItems, setProductItems] = useState([]);

  const addToCart = () => {
    const newItem = {
      id,
      name,
      category,
      size,
      price,
      img,
      description, 
      total
    };

    setProductItems(prevCartItems => [...prevCartItems, newItem]);
  };

  return (
    <ProductCard>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <p>Nombre: {name}</p>
        <p>Categoria: {category}</p>
        <p>Talle: {size}</p>
        <p>Precio: {price}</p>
        <p>Descripción: {description}</p>
        <p>Total: {total}</p>
        <button onClick={addToCart}>Agregar al carrito</button>
        <DeleteProduct productId = {id}/>
        <EditProduct productId = {id}/>
      </div>
    </ProductCard>
  );
};

export default ProductItem;
