import React from 'react'
import { useCartContext } from './CartContext'

function ItemProdts({product}) {
    const {removeProduct} = useCartContext();
  return (
    <div className='itemcart'>
    <img src={product.image} alt={product.title}/>
     <div>
      <p>Titulo: {product.title} </p>
      <p>Cantidad: {product.quantity} </p>
      <p>Precio u.: {product.price} </p>
      <p>Subtotal: $ {(product.quantity) * (product.price)} </p>
      <button onClick={()=> removeProduct(product.id)}>Eliminar</button>

     </div>
    </div>
  )
}

export default ItemProdts;