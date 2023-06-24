import { useState } from 'react'
import './Form.css'
import { addDoc, collection, setDoc } from 'firebase/firestore';
import { db, uploadFile } from '../../firebase/config';


const AddProductForm = () => {

  //FIXME: Subir imagen


  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productSize, setProductSize] = useState('');
  const [productImg, setProductImg] = useState(null);
  const [productDescription, setProductDescription] = useState('');
  const [productTotal, setProductTotal] = useState(0);
  const [error, setError] = useState('');

  const nameChangeHandler = (event) => {
    setProductName(event.target.value)
  }

  const categoryChangeHandler = (event) => {
    setProductCategory(event.target.value)
  }

  const priceChangeHandler = (event) => {
    setProductPrice(event.target.value)
  }

  const sizeChangeHandler = (event) => {
    setProductSize(event.target.value)
  }

  const descriptionChangeHandler = (event) => {
    setProductDescription(event.target.value)
  }
 
  const totalChangeHandler = (event) => {
    setProductTotal(event.target.value)
  }

  const types = ['image/png', 'image/jpeg', 'image/jpg']

  const imgChangeHandler = (event) => {
    let selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError('');
    } else {
      setProductImg(null);
      setError('Por favor seleccionar una imagen valida con extensión .jpg .png .jpeg')
    }
  }

  const addProductHandler = (event) => {
    event.preventDefault();
    
    addDoc(collection( db , "Productos"), {
      name: productName,
      category: productCategory,
      price: Number(productPrice),
      size: productSize,
      img: productImg,
      description: productDescription,
      total: productTotal
    }).then(()=>
    {
      setProductName('');
      setProductCategory('');
      setProductPrice(0);
      setProductSize('');
      setProductImg('');
      setProductDescription('');
      setProductTotal(0);
    }).catch((err)=>setError(err.message));
  }

  return (
    <div className='container'>
      <h2>Agregar Producto</h2>
      <hr />
      <form className='form-group'  onSubmit={addProductHandler}>
  
          <label>Nombre</label>
          <input type="text" value={productName} onChange={nameChangeHandler} />
        <br />
          <label>Categoria</label>
          <input type="text" value={productCategory} onChange={categoryChangeHandler}/>
       <br />
          <label>Precio</label>
          <input type="number" min="0" value={productPrice} onChange={priceChangeHandler}/>
        <br />
          <label>Talle</label>
          <input type="text" value={productSize} onChange={sizeChangeHandler}/>
        <br />
          <label>Imagen</label>
          <input type="file" onChange={imgChangeHandler}/>
        <br />
          <label>Descripción</label>
          <input type="text" value={productDescription} onChange={descriptionChangeHandler}/>
        <br />
          <label>Cantidad</label>
          <input type="text" value={productTotal} onChange={totalChangeHandler}/>
        <br />

        <button className='form-btn'>Agregar Producto</button>
      </form>
      {error && <span>{error}</span>}
    </div>
  )
}

export default AddProductForm