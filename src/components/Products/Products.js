import './Products.css'
import ProductItem from '../ProductItem/ProductItem'


const Products = ({products, filterOption}) => {

  if (products.length === 0) {
    return <></>;
  }

  const productsMapped =  products.filter((product) => product.category === filterOption)
  .map((product) => (
    <ProductItem
      key={product.id}
      name={product.name}
      category={product.category}
      colour={product.colour}
      size={product.size}
      price={product.price}
      img={product.img}
      description={product.description}
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