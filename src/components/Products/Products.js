import './Products.css'
import ProductItem from '../ProductItem/ProductItem'


const Products = ({products}) => {

  const productsMapped = products.map((product) => 
  (
    <ProductItem
      key={product.id}
      name={product.name}
      category={product.category}
      size={product.size}
      price={product.price}
      img={product.img}
      description={product.description}
      total = {product.total}
    />
  )) 

 

  return (
    <div className="products-container">
      {productsMapped.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        productsMapped
      )}
    </div>
  )
}

export default Products