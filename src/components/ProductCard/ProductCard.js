import './ProductCard.css';

const ProductCard = ({children}) => {
    return (
      <div className="product-item-container">{children}</div>
    )
}
  
export default ProductCard