import ProductCard from '../ProductCard/ProductCard'

const ProductItem = ({id, name,category, colour, size, price, img, description}) => {
  return (
    <ProductCard>
      <div>
        <img src={img} alt={name}/>
      </div>
      <div>
        <p>Nombre: {name}</p>
        <p>Id: {id}</p>
        <p>Categoria: {category}</p>
        <p>Color: {colour}</p>
        <p>Talle: {size}</p>
        <p>Precio: {price}</p>
        <p>Descripción: {description}</p>
        <button>Agregar al carrito</button>
      </div>
    </ProductCard>
  )
}

export default ProductItem