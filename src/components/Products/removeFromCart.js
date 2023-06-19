
// Definición de la función removeFromCart
function removeFromCart(itemId, cartItems, setCartItems) {
    // Filtrar los elementos del carrito y eliminar el elemento con el ID correspondiente
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
  
    // Actualizar los elementos del carrito
    setCartItems(updatedCartItems);
  }
export default removeFromCart;