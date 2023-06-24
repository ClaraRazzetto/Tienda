import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import CustomizationNav from '../CustomizationNav/CustomizationNav'
import Products from '../Products/Products'

import imgLogoMarca from '../../images/logoMarca.JPG'
import './Main.css'

const Main = () => {

  const [filterOption, setFilterOption] = useState("");

  const onFilterChange = (option) => {
    setFilterOption(option);
  }
  

  //Llamada a firestore

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const querydb = getFirestore();
    const queryColletion = collection(querydb, 'Productos');

    if (filterOption !== "") {
      const queryFilter = query(queryColletion, where("category", "==", filterOption))
      getDocs(queryFilter)
        .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    } else {
      getDocs(queryColletion)
        .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }
  }, [filterOption])

  return (
    <div className='main-container'>

      <div className='img-logo'>
        <img src={imgLogoMarca} alt='logo Marca'></img>
      </div>

      <CustomizationNav onFilterChange={onFilterChange} filterOption={filterOption}/>
      
      <Products
        products={products}
      />

    </div>
  )
}

export default Main