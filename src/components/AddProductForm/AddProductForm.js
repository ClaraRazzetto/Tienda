import React, { useRef, useState } from 'react';
import './Form.css';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../../firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const categories = ["Remera", "Pantalon", "Abrigo", "Accesorio", "Zapato"];
const sizes = ["S", "M", "L", "XL", "XXL"];

const AddProductForm = () => {

  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productSize, setProductSize] = useState('');
  const [productImg, setProductImg] = useState(null);
  const [productDescription, setProductDescription] = useState('');
  const [productTotal, setProductTotal] = useState(0);
  const [error, setError] = useState('');

  const nameChangeHandler = (event) => {
    setProductName(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setProductCategory(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setProductPrice(event.target.value);
  };

  const sizeChangeHandler = (event) => {
    setProductSize(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setProductDescription(event.target.value);
  };

  const totalChangeHandler = (event) => {
    setProductTotal(event.target.value);
  };

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const imgChangeHandler = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError('');
    } else {
      setProductImg(null);
      setError('Por favor seleccionar una imagen válida con extensión .jpg, .png o .jpeg');
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (productName.trim() === '') {
      setError('Por favor ingrese un nombre de producto');
      isValid = false;
    } else if (productCategory === '') {
      setError('Por favor seleccione una categoría');
      isValid = false;
    } else if (productPrice <= 0) {
      setError('Por favor ingrese un precio válido');
      isValid = false;
    } else if (productSize === '') {
      setError('Por favor seleccione un tamaño');
      isValid = false;
    } else if (!productImg) {
      setError('Por favor seleccione una imagen');
      isValid = false;
    } else if (productDescription.trim() === '') {
      setError('Por favor ingrese una descripción');
      isValid = false;
    } else if (productTotal <= 0) {
      setError('Por favor ingrese una cantidad válida');
      isValid = false;
    } else {
      setError('');
    }
    return isValid;
  };

  const uploadImage = async () => {
    try {
      const storageRef = ref(storage, productImg.name);
      const uploadTask = uploadBytesResumable(storageRef, productImg);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Proceso de carga de la imagen
          },
          (error) => {
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadURL);
          }
        );
      });
    } catch (err) {
      throw new Error('Error al cargar la imagen');
    }
  };

  const addProductToFirestore = async (downloadURL) => {
    try {
      await addDoc(collection(db, 'Productos'), {
        name: productName,
        category: productCategory,
        price: Number(productPrice),
        size: productSize,
        img: downloadURL,
        description: productDescription,
        total: Number(productTotal)
      });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const fileInputRef = useRef(null);

  const addProductHandler = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const downloadURL = await uploadImage();
        await addProductToFirestore(downloadURL);

        setProductName('');
        setProductCategory('');
        setProductPrice(0);
        setProductSize('');
        setProductImg(null);
        fileInputRef.current.value = "";
        setProductDescription('');
        setProductTotal(0);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className='container'>
      <h2>Agregar Producto</h2>
      <form className='form-group' onSubmit={addProductHandler}>
        
        <label>Nombre</label>
        <input type='text' value={productName} onChange={nameChangeHandler} />
        <br />
        
        <label>Categoría</label>
        <select value={productCategory} onChange={categoryChangeHandler}>
          <option value=''>Categorías</option>
          {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
        </select>
        <br />
        
        <label>Precio</label>
        <input type='number' min='0' value={productPrice} onChange={priceChangeHandler} />
        <br />
        
        <label>Talle</label>
        <select value={productSize} onChange={sizeChangeHandler}>
          <option value=''>Talles</option>
          {sizes.map((s) => (<option key={s} value={s}>{s}</option>))}
        </select>
        <br />
        
        <label>Imagen</label>
        <input type='file' onChange={imgChangeHandler}  ref={fileInputRef} />
        {error && <span>{error}</span>}
        <br />
        
        <label>Descripción</label>
        <input type='text' value={productDescription} onChange={descriptionChangeHandler} />
        <br />

        <label>Cantidad</label>
        <input type='number' min='0' max='100' value={productTotal} onChange={totalChangeHandler} />
        <br />

        <button className='form-btn'>Agregar Producto</button>
      </form>
    </div>
  );
};

export default AddProductForm;
