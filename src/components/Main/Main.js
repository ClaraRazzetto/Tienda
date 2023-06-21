import { useState } from 'react'

import CustomizationNav from '../CustomizationNav/CustomizationNav'
import Products from '../Products/Products'
import imgLogoMarca from './logoMarca.JPG'

import './Main.css'

const Main = ({products}) => {

  const [filterOption, setFilterOption] = useState("");

  const onFilterChange = (option) => {
    setFilterOption(option);
  }

  return (
    <div className='main-container'>

      <div className='img-logo'>
        <img src={imgLogoMarca} alt='logo Marca'></img>
      </div>

      <CustomizationNav onFilterChange={onFilterChange} filterOption={filterOption} />
      
      <Products
        filterOption = {filterOption}
        products={products}
      />

    </div>
  )
}

export default Main