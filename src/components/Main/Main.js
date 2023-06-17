import Products from '../Products/Products'
import imgLogoMarca from './logoMarca.JPG'
import './Main.css'

const Main = ({products}) => {
  return (
    <div className='main-container'>

      <div className='img-logo'>
        <img src={imgLogoMarca} alt='logo Marca'></img>
      </div>
      
      <Products
        products={products}
      />

    </div>
  )
}

export default Main