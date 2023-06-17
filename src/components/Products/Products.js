import './Products.css'
import ProductItem from '../ProductItem/ProductItem'


const Products = ({products}) => {
  return (
    <div className="products-container">
      {
        products.map((product) => (
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
      }
    </div>
  )
}

export default Products